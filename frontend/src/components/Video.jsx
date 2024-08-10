// Video.js

import React, { useRef, useEffect } from 'react';

const Video = ({ video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className='video-container'>
      <video
        className='hero-video'
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
      />
      <div className='video-overlay'>
        <div className='video-text'>
          <strong>{video.text}</strong>
          <p id='line'></p>
        </div>
        <div className='next-arrow'>
        <i className="fa-solid fa-arrow-right"></i>
          {/* &#x2193; Arrow pointing down */}
        </div>
      </div>
    </div>
  );
};

export default Video;
