import React from 'react';

function HeaderSection() {
  return (
    <header style={{ backgroundColor: '#f5f5f5', padding: '20px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>Recent Study Material</h3>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>Browse our latest study resources and stay ahead!</p>
      </div>
    </header>
  );
}

export default HeaderSection;
