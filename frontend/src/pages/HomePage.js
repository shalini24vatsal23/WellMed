import React from 'react'; // Import React from 'react'
import '../style.css';
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from '../components/MultiCarousel';
import ReviewCarousel from '../components/ReviewCarousel';
import MultiCarousel1 from '../components/MultiCarousel1';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar'
function HomePage() { // Change the function name to HomePage

  return (
    <>
    
    <Navbar />


<section className="carousel-padding"> 
<hr className='hori-line m-5'/>

<div className='d-flex justify-content-center align-items-center'>
  <p className='h4'>Specialities</p>
</div>

  <div className="d-flex justify-content-center align-items-center">
    <div className="w-75 p-3">
      <MultiCarousel1 />
    </div>
  </div>
</section>

          <hr  className='hori-line m-5'/>

      <section className='justify-content-center align-items-center'>
        <div className='d-flex justify-content-center'>
          <p className='h4'>Read Articles from health experts</p>
        </div>
        
        <div className='d-flex justify-content-center align-items-center'>
          <div className='w-75  p-3 '>
            <MultiCarousel />
          </div>
        </div>
      </section>

      <hr className='hori-line m-5'/>

      <section className='justify-content-center align-items-center'>
        <div className='d-flex justify-content-center'>
          <p className='h4'>What our users have to say</p>
        </div>
        
        <div className='d-flex justify-content-center align-items-center'>
          <div className='w-50 p-3'>
            <div className='d-flex justify-content-center'>

            <ReviewCarousel />
          </div>
          </div>

        </div>
      </section>


      <section className='footer py-0'>
            <Footer/>
      </section>
    </>
  );
}

export default HomePage;
