import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background:rgb(1, 99, 41);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 18px;
  margin-bottom: 1rem;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #e0e0e0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h2 style={{ margin: 0 }}>Travel Recommender</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/predict">Get Recommendations</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
