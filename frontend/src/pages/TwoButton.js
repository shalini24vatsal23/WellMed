import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Card from 'react-bootstrap/Card';
import '../style.css';

function TwoButton() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-md-offset-3"> {/* Centering the columns */}
          <Card style={{ width: '18rem' }} className="h-100 shadow">
            <Card.Body>
              <Card.Title>For Patients</Card.Title>
              <Card.Text>
                Start your online consultation now!
              </Card.Text>
              <button className='pink-btn'>
                <Link to='/LoginPage1' className='text-decoration-none text-light'>Start Now</Link> {/* Use Link component */}
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-md-offset-3"> {/* Centering the columns */}
          <Card style={{ width: '18rem' }} className="h-100 shadow">
            <Card.Body>
              <Card.Title>For Doctors</Card.Title>
              <Card.Text>
                Manage Patient's details.
              </Card.Text>
              <button className='btn btn-primary'>
                <Link to='/LoginPage' className='text-decoration-none text-light'>Start Now</Link> {/* Use Link component */}
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TwoButton;
