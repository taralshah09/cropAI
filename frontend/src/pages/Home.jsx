import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import Video from '../components/Video';

const Home = () => {

    const carouselVideos = [
        {
          "src": "/videos/cropAI_vid1.mp4",
          "text": "This is a bold text for Video 1",
          "legend": "Legend for Video 1"
        },
        {
          "src": "/videos/cropAI_vid2.mp4",
          "text": "This is a bold text for Video 2",
          "legend": "Legend for Video 2"
        },
        {
          "src": "/videos/cropAI_vid3.mp4",
          "text": "This is a bold text for Video 3",
          "legend": "Legend for Video 3"
        }
      ];      
  return (
    <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            {
                carouselVideos.map(video=>{
                    // eslint-disable-next-line react/jsx-key
                    return <Video video={video}/>
                })
            }         
      </Carousel>
    </div>
  );
}

export default Home;
