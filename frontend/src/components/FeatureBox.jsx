import React from 'react';
import './FeatureBox.css';

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="feature-box">
      <div className="feature-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureBox;
