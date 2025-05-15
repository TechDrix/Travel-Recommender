import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import image from '../assets/travel_img.jpg'; // Adjust the path as necessary


export default function Predict() {
  const [formData, setFormData] = useState({
    budget_range: '',
    weather_preference: '',
    fantasy_type: '',
    event_interest: ''
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setResults(response.data.recommendations);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong!');
    }
  };

  return (
    <Container>
    <InputSection>
      
      <form onSubmit={handleSubmit}>
        <Label>Budget Range</Label>
        <Input
          type="number"
          name="budget_range"
          value={formData.budget_range}
          onChange={handleChange}
          required
        />

        <Label>Weather Preference</Label>
        <Select
          name="weather_preference"
          value={formData.weather_preference}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Tropical">Tropical</option>
          <option value="Snowy">Snowy</option>
          <option value="Moderate">Moderate</option>
           <option value="Mild Spring">Mild Spring</option>
          <option value="Summers">Summers</option>
          <option value="Rainy">Rainy</option>
          <option value="Desert">Desert</option>
          <option value="Winter">Winter</option>
        </Select>

        <Label>Fantasy Type</Label>
        <Select
          name="fantasy_type"
          value={formData.fantasy_type}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Adventure">Adventure</option>
          <option value="Luxury">Luxury</option>
          <option value="Cultural">Cultural</option>
          <option value="Budget-friendly">Budget-friendly</option>
          <option value="Romamctic-Getaway">Romamctic-Getaway</option>
          <option value="Romantic">Romantic</option>
          <option value="Island Retreat">Island Retreat</option>
          <option value="Casinos">Casinos</option>
          <option value="Wellness">Wellness</option>
        </Select>

        <Label>Event Interest</Label>
        <Select
          name="event_interest"
          value={formData.event_interest}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Hiking">Hiking</option>
          <option value="Beaches">Beaches</option>
          <option value="Festivals">Festivals</option>
          <option value="Sking">Sking</option>
          <option value="Museums">Museums</option>
          <option value="Wildlife">Wildlife</option>
          <option value="Camping">Camping</option>
          <option value="History">History</option>
          <option value="Spa">Spa</option>
          <option value="Travel">Travel</option>
          <option value="Trip">Trip</option>
          <option value="Light Show">Light Show</option>
          <option value="Cherry Blossom">Cherry Blossom</option>
          <option value="Sunset View">Sunset View</option>
          <option value="Private Villa">Private Villa</option>
          <option value="Desert Safaro">Desert Safaro</option>
          <option value="Gondala Ride">Gondala Ride</option>
          <option value="Air Bolloon Ride">Air Bolloon Ride</option>
          <option value="Norther Lights">Norther Lights</option>
          <option value="Concert">Concert</option>
          <option value="Nightlife">Nightlife</option>
        </Select>

        <Button type="submit">Get Recommendations</Button>
      </form>
      <img src={image} alt="Travel" style={{ width: '30%', height: 'auto', marginTop: '2rem' }} />
    </InputSection>
      
    {error && <ResultBox style={{ color: 'red' }}>{error}</ResultBox>}

      {results.length > 0 && (
  <ResultContainer>
    {results.map((item, idx) => (
      <ResultCard key={idx}>
        <DestinationTitle><FaMapMarkerAlt /> {item.destination}</DestinationTitle>
        <ConfidenceScore><FaStar /> Confidence: {item.confidence}</ConfidenceScore>
      </ResultCard>
    ))}
  </ResultContainer>
)}
    </Container>
    
  );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    border-radius: 8px; /* Rounded corners */
    padding: 20px; /* Add padding inside the container */
    width: 100%; /* Increased width */
    img {
        flex: 1;
        max-width: 40%;
        height: auto;
        margin-right: 80px; /* Space between image and text */  
    }
  `
const InputSection = styled.div`
  display: flex;
  
  margin: 2rem auto;
  padding: 1rem;
 
  
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin: 1rem 0 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 50%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Select = styled.select`
  width: 60vh;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  width: 40%;
  padding: 0.8rem;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ResultBox = styled.div`
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;

`;

const ResultContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
  width: 60%;
`;

const ResultCard = styled.div`
  background: linear-gradient(to right, #f0f4f8, #e2ecf5);
  border-left: 5px solid #007bff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const DestinationTitle = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  svg {
    margin-right: 0.5rem;
    color: #007bff;
  }
`;

const ConfidenceScore = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: #555;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.4rem;
    color: gold;
  }
`;

