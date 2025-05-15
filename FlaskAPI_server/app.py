from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd
from xgboost import XGBClassifier

# Load model and encoders
with open('xgboost_travel_model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('destination_label_encoder.pkl', 'rb') as f:
    le_destination = pickle.load(f)

with open('feature_label_encoders.pkl', 'rb') as f:
    label_encoders = pickle.load(f)

# Flask app
app = Flask(__name__)

# Top-K prediction function
def recommend_destinations(user_input, k=3):
    # Convert dict to DataFrame
    user_df = pd.DataFrame([user_input])

    # Force numerical types for known numeric fields
    if 'budget_range' in user_df.columns:
        user_df['budget_range'] = pd.to_numeric(user_df['budget_range'], errors='coerce')

    # Encode categorical features
    for col in user_df.columns:
        if col in label_encoders:
            user_df[col] = label_encoders[col].transform(user_df[col].astype(str))

    # Check for any NaNs after conversion
    if user_df.isnull().any().any():
        raise ValueError(f"Invalid or missing input values: {user_df}")

    # Predict probabilities
    probs = model.predict_proba(user_df)

    # Get top-k indices
    top_k_indices = np.argsort(probs[0])[-k:][::-1]
    top_k_destinations = le_destination.inverse_transform(top_k_indices)
    top_k_scores = probs[0][top_k_indices]

    # Prepare response
    return [
        {'destination': dest, 'confidence': round(float(score), 4)}
        for dest, score in zip(top_k_destinations, top_k_scores)
    ]

    # Convert dict to DataFrame
    user_df = pd.DataFrame([user_input])

    # Encode categorical features
    for col in user_df.columns:
        if col in label_encoders:
            user_df[col] = label_encoders[col].transform(user_df[col])

    # Predict probabilities
    probs = model.predict_proba(user_df)

    # Get top-k indices
    top_k_indices = np.argsort(probs[0])[-k:][::-1]
    top_k_destinations = le_destination.inverse_transform(top_k_indices)
    top_k_scores = probs[0][top_k_indices]

    # Prepare response
    return [
        {'destination': dest, 'confidence': round(float(score), 4)}
        for dest, score in zip(top_k_destinations, top_k_scores)
    ]

# API route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No input provided'}), 400
        
        recommendations = recommend_destinations(data, k=3)
        return jsonify({'recommendations': recommendations})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

from flask_cors import CORS
CORS(app)

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
