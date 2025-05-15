import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f4f8;
`;

const Box = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1f2937;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const Select = styled.select`
  margin-top: 0.25rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4338ca;
  }
`;

const ResultContainer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

const ErrorContainer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #dc2626;
`;

const Predict= () => {
  const [formData, setFormData] = useState({
    budget_range: '',
    weather_preference: '',
    fantasy_type: '',
    event_interest: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError(null);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.recommendations);
      } else {
        setError(data.error || 'An unexpected error occurred');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <Container>
      <Box>
        <Title>Travel Destination Recommender</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Budget Range
            <Select name="budget_range" required onChange={handleChange}>
              <option value="10000">Budget (Under $500)</option>
              <option value="20000">Moderate ($500-$1500)</option>
              <option value="30000">Luxury ($1500-$3000)</option>
              <option value="40000">Ultra Luxury (Over $3000)</option>
            </Select>
          </Label>

          <Label>
            Weather Preference
            <Select name="weather_preference" required onChange={handleChange}>
              <option value="Tropical">Tropical Paradise</option>
              <option value="Snowy">Coolness</option>
              <option value="Moderate">Moderate</option>
            </Select>
          </Label>

          <Label>
            Travel Style
            <Select name="fantasy_type" required onChange={handleChange}>
              <option value="Adventure">Adventure Seeker</option>
              <option value="Cultural">Cultural Immersion</option>
              <option value="Luxury">Luxury Relaxation</option>
              <option value="Budget-friendly">Budget Friendly</option>
              <option value="Cultural">Historical Journey</option>
            </Select>
          </Label>

          <Label>
            Event Interest
            <Select name="event_interest" required onChange={handleChange}>
              <option value="Hiking">Hiking</option>
              <option value="Camping">Camping</option>
              <option value="Beaches">Beaches</option>
              <option value="Skiing">Skiing</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Spa">Spa</option>
              <option value="History">Historical</option>
              <option value="Travel">Travel</option>
              <option value="Trip">Trip</option>
            </Select>
          </Label>

          <Button type="submit">Find My Destination</Button>
        </Form>

        {result && (
          <ResultContainer>
            <h2>Recommended Destinations:</h2>
            <ul>
              {result.map((item, index) => (
                <li key={index}><strong>{item.destination}</strong> - Confidence: {item.confidence}</li>
              ))}
            </ul>
          </ResultContainer>
        )}

        {error && (
          <ErrorContainer>
            <p>{error}</p>
          </ErrorContainer>
        )}
      </Box>
    </Container>
  );
};

export default  Predict;
