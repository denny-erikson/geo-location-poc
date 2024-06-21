// src/SliderStyles.ts
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderStyles = createGlobalStyle`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    /* margin-right: 4px; */
    overflow-y: none;
  }
  .slick-slide:focus {
    outline: none;
  }

  .slick-prev:focus,
  .slick-next:focus,
  .slick-dots button:focus {
    outline: none;
  }

  .slick-prev, .slick-next {
    z-index: 1;
  }
`;

export default SliderStyles;
