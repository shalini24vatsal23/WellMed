import React from "react";
import NavBar from "../components/NavBar";
import '../style.css';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const DocData = [
  {
    name: "Dr Morrigan",
    image: "https://via.placeholder.com/150",
    exp: "3",
    speciality: "Cardiology",
    location: "UP",
    education: "MD Harvard",
  },
];

function SpecialCard({ doctor }) {
  return (
    <MDBCard style={{ borderRadius: '15px', width: '600px' , height: '300px' }}>
      <MDBCardBody className="p-4 text-black">
        <div>
          <MDBTypography tag='h6'>{doctor.name}</MDBTypography>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <p className="small mb-0"><MDBIcon far icon="clock me-2" />Experience :{doctor.exp} years</p>
            <p className="fw-bold mb-0">$90</p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="flex-shrink-0">
            <MDBCardImage
              style={{ width: '70px' }}
              className="img-fluid rounded-circle border border-dark border-3"
              src={doctor.image}
              alt='Doctor Image'
              fluid />
          </div>
          <div className="flex-grow-1 ms-3">
            <div className="d-flex flex-row align-items-center mb-2">
              <p className="mb-0 me-2">{doctor.speciality}</p>
              <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                <li><MDBIcon fas icon="star fa-xs" /></li>
                <li><MDBIcon fas icon="star fa-xs" /></li>
                <li><MDBIcon fas icon="star fa-xs" /></li>
                <li><MDBIcon fas icon="star fa-xs" /></li>
                <li><MDBIcon fas icon="star fa-xs" /></li>
              </ul>
            </div>
            <div>
              <MDBBtn outline color="dark" rounded size="sm">+ Follow</MDBBtn>
              <MDBBtn outline color="dark" rounded size="sm" className="mx-1">See profile</MDBBtn>
            </div>
          </div>
        </div>
        <hr />
        <MDBCardText>Reviews</MDBCardText>
        <MDBBtn 
  color="primary blue" /* Remove or adjust as needed */
  rounded 
  block 
  size="lg" 
  style={{ 
    width: '200px', 
    height: '50px', 
    backgroundColor: '#fe5757',
    textAlign: 'center',  /* Add for centering text (optional) */
    border: '1px solid white'  /* Add this line for white border */
  }}
>
  <MDBIcon far icon="clock me-2" /> Book now
</MDBBtn>



      </MDBCardBody>
    </MDBCard>
  );
}

function SpecialitiesPage() {
  return (
    <>
      <section className="specialities-page">
        <NavBar />
        <div className="specialities-grid" style={{ paddingTop: "90px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {DocData.map((doctor, index) => (
            <Link to='/Appoint' key={index}>
              <SpecialCard doctor={doctor} />
            </Link>
          ))}
        </div>
        <div className="specialities-grid" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {DocData.map((doctor, index) => (
            <SpecialCard key={index} doctor={doctor} />
          ))}
        </div>
        <div className="specialities-grid" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {DocData.map((doctor, index) => (
            <SpecialCard key={index} doctor={doctor} />
          ))}
        </div>
      </section>
      <section className='footer py-0'>
        <Footer />
      </section>
    </>
  );
}

export default SpecialitiesPage;