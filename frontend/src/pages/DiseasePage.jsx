import { Link } from "react-router-dom";

const DiseasePage = () => {
  return (
    <div className="disease-page">
      <div className="disease-buttons-box">
        <Link to="/disease/scan" style={{textDecoration:"none",color:"black"}}>
          <div className="option-card">
            <div className="img-box">
              <i className="fa-solid fa-camera"></i>
            </div>
            <div className="content">
              <h2>Upload an Image of Your Affected Crop</h2>
              <p>
                Got a suspicious spot on your plant? Use our image scan tool to
                upload a photo, and our advanced AI will analyze it to identify
                any diseases or pests affecting your crops. Get instant feedback
                and expert advice on how to address the issue.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/disease/describe" style={{textDecoration:"none",color:"black"}}>
          <div className="option-card">
            <div className="img-box">
              <i className="fa-solid fa-keyboard"></i>
            </div>
            <div className="content">
              <h2>Describe the Symptoms of Your Crop</h2>
              <p>
                Not sure what's wrong with your crop? Provide a detailed
                description of the symptoms, such as discoloration, wilting, or
                unusual spots. Our system will analyze your prompt and offer
                potential diagnoses and treatment options to help you take
                action.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DiseasePage;
