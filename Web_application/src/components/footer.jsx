import React from "react";
import styled, { keyframes } from "styled-components";

// Background Gradient Animation
const animateBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Footer Container
const FooterContainer = styled.footer`
 
  width: 100%;
  padding: 20px;
  text-align: center;
  color: white;
  background: linear-gradient(45deg, #ff6b6b, #6b8bff, #6bff94);
  background-size: 200% 200%;
  animation: ${animateBg} 5s infinite alternate;
  position: relative;
  left:0;
  bottom: 0;
  border-radius:18px;

  @media (max-width: 768px) {
    padding: 15px;
    width:90%;
  }
`;

// Footer Content with Flexbox
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

// Social Media Icons
const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

// Footer Text
const FooterText = styled.p`
  font-size: 1rem;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>About</h3>
        <FooterText> A Travel Destination Recommender system based on the budget plan, fantasy types and weather condition of the places using machine learning can be a valuable application for people and traveller to find out the places suitable with there plan and budget</FooterText>
        <h3>About</h3>
        <FooterText> A Travel Destination Recommender system based on the budget plan, fantasy types and weather condition of the places using machine learning can be a valuable application for people and traveller to find out the places suitable with there plan and budget</FooterText>
        <SocialIcons>
            
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">🐦</a>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
