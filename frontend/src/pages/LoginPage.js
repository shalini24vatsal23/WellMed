import React from 'react';
import backgroundImage from '../images/signin.png';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const LoginPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1,
  };

  const authFormContentStyle = {
    color: '#000000', // Dark black text color
    width: '500px',
    padding: '30px',
    backgroundColor: 'white', // Add background color for the box
    borderRadius: '8px', // Add border radius for rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
  };

  return (
    <div className="container" style={backgroundImageStyle}>
      <NavBar/>
      <div style={backgroundOverlayStyle}></div>
      <div className="auth-container">
        <form className="Auth-form">
          <div className="Auth-form-content" style={authFormContentStyle}>
            <h3>Sign In As Doctor</h3>
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
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                style={{
                  backgroundColor: 'blue',
                  color: '#ffffff',
                  border: '1px solid #ffffff',
                  borderRadius: '6px',
                }}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot password?</a>
            </p>
            <p>
              Don't have an account? <Link to="/signupdoctor">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;