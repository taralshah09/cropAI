import React from "react";

const DiseaseDescribePage = () => {
  return (
    <div className="disease-describe-page">
      <div className="form-container">
        <h2>Describe your disease</h2>
        <form action="">
          <textarea placeholder="Eg : Please describe the symptoms your crop is experiencing. Be as detailed as possible, including any noticeable changes in color, texture, leaf shape, or other abnormalities. For example, you might mention things like yellowing leaves, brown spots, wilting, stunted growth, or unusual patterns on the stems or leaves. The more specific you are, the better I can help you identify the disease affecting your crop." />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="answer-box"></div>
    </div>
  );
};

export default DiseaseDescribePage;
