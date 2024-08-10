import React from 'react';
// import './index.css'; // Update the path to your CSS file


const Features = () => {
  return (
    <div className="features-container">
      <p className="features-title">Here are the features<br/>we’re proud of</p>

      <div className="cards-grid">
        <div className="feature-card">
          <div className="card-content bg-green-card">
            <i className="ri-flower-fill icon-large" id="icon-disease"></i>
            <p className="feature-title">Disease Diagnosis</p>
            <p className="feature-description">
              Advanced diagnostic tools for accurate disease identification and tracking. Our platform provides comprehensive analysis to support healthcare professionals in making informed decisions.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="card-content bg-white-card">
            <i className="ri-plant-line icon-large"></i>
            <p className="feature-title">Crop Info</p>
            <p className="feature-description">
              Detailed information on crop growth, yield, and health. Our tool offers insights to optimize agricultural practices and increase productivity, which helps farmers make the right decisions.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="card-content bg-yellow-card">
            <i className="ri-pie-chart-2-fill icon-large"></i>
            <p className="feature-title">Financial Insights</p>
            <p className="feature-description">
              Comprehensive financial insights and analytics to help you make informed investment decisions. Our platform provides real-time data and forecasts for better financial planning.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="card-content bg-yellow-card">
            <i className="ri-hail-fill icon-large" id="icon-harvest"></i>
            <p className="feature-title">Harvest Prediction</p>
            <p className="feature-description">
              Lorem ipsum dolor sit amet. Our platform provides real-time data and forecasts for better decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
