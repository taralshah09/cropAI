// eslint-disable-next-line react/prop-types
const Video = ({ video }) => {
  return (
    <div className="video">
      <video controls width="100%" autoPlay={true}>
         {/* eslint-disable-next-line react/prop-types */}
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="inner-box">
          <div className="para-box">
         {/* eslint-disable-next-line react/prop-types */}
            <p>{video.text}</p>
          </div>
          <div id="line"></div>
        </div>
        {/* <p className="legend">{video.legend}</p> */}
      </div>
    </div>
  );
};

export default Video;
