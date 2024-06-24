// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ branch, year, subject });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Branch:</label>
        <input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
