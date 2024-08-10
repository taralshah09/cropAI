import React, { useState } from "react";

const DiseaseScanPage = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
      console.log("Uploaded file:", file);
      // You can add further logic to handle the uploaded file, such as sending it to your backend or processing it.
    }
  };

  return (
    <div className="disease-scan-page">
      <div className="img-container">
        <input
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
          accept="image/*" // Restricting the upload to image files only
        />

        {imageSrc ? (
          <div className="uploaded-image-container">
            <img
              src={imageSrc}
              alt="Uploaded Crop"
              className="uploaded-image"
            />
          </div>
        ) : (
          <div className="disease-empty-image"></div>
        )}
        <div
          className="btn-box"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "25px",
          }}
        >
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload file
          </label>
          <label className="custom-file-upload">Get Result</label>
        </div>
      </div>
      <div className="answer-box">
        <h3>Answer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          doloremque facilis dignissimos enim iste. Debitis, temporibus
          molestiae? Ea, porro inventore, aspernatur quia veniam, minima libero
          perspiciatis doloremque dolore exercitationem facilis?
        </p>
      </div>
    </div>
  );
};

export default DiseaseScanPage;
