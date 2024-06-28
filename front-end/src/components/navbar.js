import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/log.jpg';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#fff', color: '#333', padding: '10px 20px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/">
          <img src={logo} alt="College Logo" style={{ width: '140px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ margin: '0', fontSize: '1.8rem', letterSpacing: '2px' }}>Community Site</h1>
        </div>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
