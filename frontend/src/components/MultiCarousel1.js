import React from 'react';
import Card1 from './Card1';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { disease } from '../jsonData/specialities';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 5000, min: 1650 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 1650, min: 1150 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1150, min: 850 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 2
  }
};

function MultiCarousel1() {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-20-px"
    >
      {disease.map((item, index) => (
        <Card1 key={index} disease={item} />
      ))}
    </Carousel>
  );
}

export default MultiCarousel1;
