import React from 'react';
import Card2 from './Card2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { articles } from '../jsonData/articles';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 5000, min: 1650 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1650, min: 1150 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1150, min: 850 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1
  }
};

function MultiCarousel() {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-20-px"
    >
      {articles.map((item, index) => (
        <Card2 key={index} article={item} />
      ))}
    </Carousel>
  );
}

export default MultiCarousel;
