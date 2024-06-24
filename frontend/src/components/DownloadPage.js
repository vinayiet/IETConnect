import React, { useState } from 'react';
import './DownloadPage.css'; // Import the CSS file

const DownloadPage = () => {
  const initialPapers = [
    {
      "id": 1,
      "name": "Paper 1",
      "branch": "cs",
      "semester": "1st",
      "year": 2010,
      "subject": "1"
    },
    {
      "id": 2,
      "name": "Paper 2",
      "branch": "entc",
      "semester": "2nd",
      "year": 2011,
      "subject": "2"
    },
    {
      "id": 3,
      "name": "Paper 3",
      "branch": "mech",
      "semester": "3rd",
      "year": 2012,
      "subject": "Chemistry"
    },
    {
      "id": 4,
      "name": "Paper 4",
      "branch": "cs",
      "semester": "4th",
      "year": 2013,
      "subject": "Computer Science"
    },
    {
      "id": 5,
      "name": "Paper 5",
      "branch": "entc",
      "semester": "5th",
      "year": 2014,
      "subject": "Electronics"
    },
    {
      "id": 6,
      "name": "Paper 6",
      "branch": "mech",
      "semester": "6th",
      "year": 2015,
      "subject": "Mechanical Engineering"
    },
    {
      "id": 7,
      "name": "Paper 7",
      "branch": "cs",
      "semester": "7th",
      "year": 2016,
      "subject": "Algorithms"
    },
    {
      "id": 8,
      "name": "Paper 8",
      "branch": "entc",
      "semester": "8th",
      "year": 2017,
      "subject": "Communication Systems"
    },
    {
      "id": 9,
      "name": "Paper 9",
      "branch": "mech",
      "semester": "1st",
      "year": 2018,
      "subject": "Thermodynamics"
    },
    {
      "id": 10,
      "name": "Paper 10",
      "branch": "cs",
      "semester": "2nd",
      "year": 2019,
      "subject": "Operating Systems"
    },
    {
      "id": 11,
      "name": "Paper 11",
      "branch": "entc",
      "semester": "3rd",
      "year": 2020,
      "subject": "Digital Signal Processing"
    },
    {
      "id": 12,
      "name": "Paper 12",
      "branch": "mech",
      "semester": "4th",
      "year": 2021,
      "subject": "Fluid Mechanics"
    },
    {
      "id": 13,
      "name": "Paper 13",
      "branch": "cs",
      "semester": "5th",
      "year": 2022,
      "subject": "Database Management Systems"
    },
    {
      "id": 14,
      "name": "Paper 14",
      "branch": "entc",
      "semester": "6th",
      "year": 2023,
      "subject": "Embedded Systems"
    }
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
    <div className="download-page">
      <h1>Download Previous Year Papers</h1>
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

export default DownloadPage;
