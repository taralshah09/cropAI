import  { useRef, useEffect } from "react";

const Video = ({ video, onNextSlide }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="video-container">
      <video
        className="hero-video video-filter"
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
      />
      <div className="video-overlay">
        <div className="video-text">
          <div className="video-text-line">
            <strong className="carousel-caption">{video.text}</strong>
            <i 
              className="fa-solid fa-arrow-right"
              onClick={onNextSlide}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            ></i>
          </div>
          <p id="line"></p>
        </div>
      </div>
    </div>
  );
};

export default Video;
