import React from 'react';
import logo from '../images/log.jpg'; // Import your logo image

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#fff', color: '#333', padding: '10px 20px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <img src={logo} alt="College Logo" style={{ width: '140px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />

        {/* Title and Description */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ margin: '0', fontSize: '1.8rem', letterSpacing: '2px' }}>Community Site</h1>
        </div>

        {/* Login Button */}
        <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
