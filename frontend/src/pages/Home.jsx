import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import Video from '../components/Video';
import { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselVideos.length);
  };

  const carouselVideos = [
    {
      "src": "/videos/cropAI_vid1.mp4",
      "text": "Revolutionizing Agriculture with AI",
      "legend": "Explore how AI-driven solutions are transforming crop management and boosting yields."
    },
    {
      "src": "/videos/cropAI_vid2.mp4",
      "text": "The Future of Farming is Here",
      "legend": "Discover cutting-edge technologies that are making farming more efficient and sustainable."
    },
    {
      "src": "/videos/cropAI_vid3.mp4",
      "text": "Innovative Tech for Smarter Agriculture",
      "legend": "From drones to data analytics, see how innovation is shaping the future of agriculture."
    }
  ];

  return (
    <div>
      <Carousel 
        selectedItem={currentSlide} 
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true}
        showArrows={false}  // Hide the arrows
        onChange={(index) => setCurrentSlide(index)}
      >
        {carouselVideos.map((video, index) => (
          <Video 
          className="carousel-item"
            key={index} 
            video={video} 
            onNextSlide={handleNextSlide}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
