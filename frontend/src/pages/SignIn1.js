import React from 'react';
import '../style.css'; 
import backgroundImage from '../images/signin.png'; // Adjust the path to your actual image

const SignIn1 = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.8'
  };

  return (
    <>
    <div className="container" style={backgroundStyle}>
      {/* First sign-in container */}
      <div className="auth-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
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
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      {/* Second sign-in container (exact copy) */}
      <div className="auth-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3>Sign In As Patient</h3>
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
                  backgroundColor: '#fe5757',
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
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignIn1;
