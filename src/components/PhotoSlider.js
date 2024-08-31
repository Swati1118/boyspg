// src/components/PhotoSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoSlider = () => {
  const photos = [
    { src: '/pg1.jpg', alt: 'PG Image 1' },
    { src: '/pg2.jpg', alt: 'PG Image 2' },
    { src: '/pg3.jpeg', alt: 'PG Image 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200, // Adjusted for a slower transition
    arrows: true,
  };

  return (
    <div style={styles.sliderContainer}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} style={styles.slide}>
            <img src={photo.src} alt={photo.alt} style={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  sliderContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
  },
  slide: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default PhotoSlider;
