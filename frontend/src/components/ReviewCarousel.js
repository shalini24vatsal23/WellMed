import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import whitePoster from '../images/whitePoster.png'; // Import the image correctly
import { reviews } from '../jsonData/reviews';

function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" className='w-100'>
        {reviews.map((item, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img
              className="d-block w-100"
              src={whitePoster}
              alt=""
            />
            <Carousel.Caption className='w-75 d-flex justify-content-center align-items-center'>
              <div className='w-75'>
                <h5 className='text-dark'>{item.review}</h5>
                <p className='text-dark'>{item.user}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ReviewCarousel;
