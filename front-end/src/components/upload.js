import React from 'react';
import './upload.css'; // Import your CSS file for styling

function UploadPage() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle the file upload logic here, e.g., send it to a server or store in state
    console.log('Selected file:', file);
  };

  return (
    <div className="container">
      <div className="card">
        <p>Select a category to upload:</p>
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

        {/* File upload input */}
        <div>
          <label htmlFor="file-upload" className="file-upload-label">
            Choose file:
          </label>
          <input
            type="file"
            id="file-upload"
            name="file-upload"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            className="file-upload-input"
          />
        </div>

        {/* Upload button */}
        <button className="upload-button">Upload</button>
      </div>
    </div>
  );
}

export default UploadPage;
