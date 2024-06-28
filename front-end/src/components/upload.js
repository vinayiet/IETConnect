import React, { useState } from 'react';
import './upload.css'; // Import the CSS file

const UploadPage = () => {
  const initialPapers = [
    // Initial papers data as provided
  ];

  const [papers, setPapers] = useState(initialPapers);
  const [filters, setFilters] = useState({
    branch: '',
    semester: '',
    year: '',
    subject: ''
  });
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const filteredPapers = initialPapers.filter(paper =>
      (newFilters.branch === '' || paper.branch.toLowerCase().includes(newFilters.branch.toLowerCase())) &&
      (newFilters.semester === '' || paper.semester.toLowerCase().includes(newFilters.semester.toLowerCase())) &&
      (newFilters.year === '' || paper.year.toString().includes(newFilters.year)) &&
      (newFilters.subject === '' || paper.subject.toLowerCase().includes(newFilters.subject.toLowerCase()))
    );
    setPapers(filteredPapers);
    setIsFilterActive(true);
  };

  const Filter = ({ onFilterChange }) => {
    const [branch, setBranch] = useState('');
    const [semester, setSemester] = useState('');
    const [year, setYear] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onFilterChange({ branch, semester, year, subject });
    };

    return (
      <form onSubmit={handleSubmit} className="filter-form">
        <div>
          <label>Branch:</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
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

  return (
    <div className="upload-page">
      <h1>Upload Previous Year Papers</h1>
      <div className='filter-data'>
        <div className={`filter-container ${isFilterActive ? 'active' : ''}`}>
            <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className={`papers-list ${isFilterActive ? 'active' : ''}`}>
            {papers.map(paper => (
            <div key={paper.id} className="paper-item">
                <h2>{paper.name}</h2>
                <div className='tags'>
                    <p>{paper.branch}</p>
                    <p>{paper.semester}</p>
                    <p>{paper.year}</p>
                    <p>{paper.subject}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
