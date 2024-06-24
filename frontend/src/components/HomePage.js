// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Create this CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Our App</h1>
        <p className="subtitle">Your journey to excellence starts here.</p>
      </header>
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best resources for students to excel in their exams.</p>
      </section>
    </div>
  );
};

export default HomePage;
