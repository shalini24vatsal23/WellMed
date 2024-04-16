import React from 'react';
import Form from 'react-bootstrap/Form';
import '../style.css';
import backgroundImage from '../images/signin.png';
import NavBar from '../components/NavBar';

function SignUpDoctor() {
  return (
    <div className="auth-container d-flex justify-content-center align-items-center vh-100 m-3"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>
      <NavBar/>
      <div className="Auth-form shadow border border-1 border-lightgrey rounded p-5" style={{ backgroundColor: 'white' }}>
        <div className="Auth-form-content">
          <h3>Sign Up As Doctor</h3>

          <form action="">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label>Education</label>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label>Specialization</label>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label>State</label>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="#">Forgot password?</a>
          </p>
          <p>
            already have an account? <a href="#">Sign In</a>
          </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpDoctor;
