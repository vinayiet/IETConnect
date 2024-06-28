import React from 'react';
import './download.css'; // Import your CSS file for styling

function DownloadPage() {
  return (
    <div className="container">
      <div className="card">
        <p>Select a category to download:</p>
        <select id="category">
          <option value="">Select Category</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
          <option value="CE">CE</option>
        </select>

        {/* Nested dropdown for CSE category */}
        <div id="subcategory">
          <select id="cseSubcategory">
            <option value="">Select Subject</option>
            <option value="C Language Paper">C Language Paper</option>
            <option value="DBMS">DBMS</option>
            {/* Add more subjects as needed */}
          </select>
        </div>

        {/* Download button */}
        <button className="download-button">Download</button>
      </div>
    </div>
  );
}

export default DownloadPage;
