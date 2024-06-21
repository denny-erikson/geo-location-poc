// src/components/ImageSlider.tsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderStyles from './styles';

const SliderContainer = styled.div`
  width: 114%;
  margin: 0 auto;
  padding: 12px 0; // Adiciona um pouco de padding para estética
  box-sizing: border-box;
  margin-top:24px;
  margin-left: -20px;

`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  overflow: hidden;
  margin-right: 4px;
`;

const SlideImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  padding:4px;  
`;

interface ImageSliderProps {
  images: string[];
  isOpen: boolean; 
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, isOpen }) => {
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setSliderKey(prevKey => prevKey + 1); 
    }
  }, [isOpen]);

  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.05,
    slidesToScroll: 1,
    centerPadding: '0', // Ajusta o padding central
    arrows: true,
  };

  return (
    <>
      <SliderStyles />
      <SliderContainer>
        <Slider key={sliderKey} {...settings}>
          {images.map((image, index) => (
            <Slide key={index}>
              <SlideImage src={image} alt={`Slide ${index}`} />
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
    </>
  );
};


