import React from 'react';
import './photosDetails.css';  // You can omit this if not using CSS
import photo1 from '../images/assignment.png';
import photo2 from '../images/discussion.jpg';
import photo3 from '../images/paper.png';

const PhotosDetails = () => {
  return (
    <div className="photos-details-container">
      <div className="row">
        <div className="column">
          <img src={photo1} alt="Image 1" className="photo" />
        </div>
        <div className="column">
          <p>Text content for item 1.</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={photo2} alt="Image 2" className="photo" />
        </div>
        <div className="column">
          <p>Text content for item 2.</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={photo3} alt="Image 3" className="photo" />
        </div>
        <div className="column">
          <p>Text content for item 3.</p>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetails;
