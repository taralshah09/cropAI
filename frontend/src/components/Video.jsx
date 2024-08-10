// Video.js

import React, { useRef, useEffect } from "react";

const Video = ({ video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="video-container">
      <video
        className="hero-video"
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
      />
      <div className="video-overlay">
        <div className="video-text">
          <div className="video-text-line">
            <strong>{video.text}</strong>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <p id="line"></p>
        </div>
      </div>
    </div>
  );
};

export default Video;
