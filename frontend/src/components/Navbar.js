// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        {/* <li className="navbar-item"><button onClick={scrollToAbout} className="navbar-link">About</button></li> */}
        <li className="navbar-item"><Link to="/download" className="navbar-link">Download Previous Year Papers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
