import { Link } from "react-router-dom";

const CropInfoPage = () => {
  return (
    <div className="crop-info-page">
      <div className="info-buttons-box">
        <Link to="/info/pest-prevention" style={{ textDecoration: "none", color: "black" }}>
          <div className="info-card">
            <div className="img-box">
              <i className="fa-solid fa-bug"></i>
            </div>
            <div className="content">
              <h2>Pest Prevention Tips</h2>
              <p>
                Learn how to protect your crops from common pests with our comprehensive guide. Discover effective prevention methods, natural remedies, and expert advice to keep your plants healthy and pest-free.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/info/disease-management" style={{ textDecoration: "none", color: "black" }}>
          <div className="info-card">
            <div className="img-box">
              <i className="fa-solid fa-virus"></i>
            </div>
            <div className="content">
              <h2>Disease Management Strategies</h2>
              <p>
                Get detailed information on managing crop diseases. Our guide covers identification, treatment options, and best practices to control and prevent the spread of plant diseases.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/info/nutrient-guide" style={{ textDecoration: "none", color: "black" }}>
          <div className="info-card">
            <div className="img-box">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <div className="content">
              <h2>Nutrient Requirements for Healthy Crops</h2>
              <p>
                Understand the essential nutrients your crops need for optimal growth. Learn about soil health, fertilization techniques, and how to ensure your plants get the nutrients they require.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CropInfoPage;
