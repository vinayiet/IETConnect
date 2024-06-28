import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/collegeimg.jpg'; // Import your background image

function HeaderSection() {
  const navigate = useNavigate();

  const headerStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat`, // Set background image
    backgroundColor: '#f8f9fa',
    padding: '60px 0',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '10px',
  };

  return (
    <header style={headerStyle}>
      <div style={{ margin: '0 auto', maxWidth: '800px' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#FFF' }}>Recent Study Material</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#FFF' }}>This is where you can display recent uploads or categories of study material.</p>
        <div>
          <button style={buttonStyle} onClick={() => navigate('/upload')}>Upload Papers</button>
          <button style={buttonStyle} onClick={() => navigate('/download')}>Download Papers</button>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
