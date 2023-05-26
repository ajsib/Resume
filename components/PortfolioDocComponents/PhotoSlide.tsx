// ./components/PortfolioDocComponents/PhotoSlide.tsx

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function PhotoSlide() {
  const images = Array.from({ length: 5 }, (_, i) => `/slideshow/slide${i + 1}.png`);

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}
