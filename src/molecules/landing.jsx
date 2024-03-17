import React from 'react';
import { Link } from 'react-router-dom'; 
import './Landing.css'

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="background-pic"></div>
      <div className="content">
        <h1>PLACEME 2.0</h1>
        <div className="buttons">
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;

