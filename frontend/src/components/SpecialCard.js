import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import React from "react";
import '../style.css';

function SpecialCard({ doctor }) {
  const doctorName = doctor.firstname + ' ' + doctor.lastname;
  return (
    <MDBCard style={{ borderRadius: '15px', width: '100%'}}>
      <MDBCardBody className="p-2 text-black">
        <div className='p-1'>
          <MDBTypography tag='h3'>{doctorName}</MDBTypography>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <p className="small mb-0 h5"><MDBIcon far icon="clock me-2" />Experience :{doctor.experience} years</p>
            <p className="fw-bold mb-0">&#8377;{doctor.price}</p>
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
              <button className='btn btn-dark m-1 p-1'>{doctor.education}</button>
              <button className='btn btn-dark m-1 p-1'>{doctor.specialization}</button>
              <button className='btn btn-dark m-1 p-1'>{doctor.state}</button>
            </div >
          </div>
        </div>
        <hr />
        <button className='pink-btn'>Book Now</button>
      </MDBCardBody>
    </MDBCard>
  );
}

export default SpecialCard;