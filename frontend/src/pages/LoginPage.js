import React, { useState } from 'react';
import backgroundImage from '../images/signin.png';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    if(!email || !password){
        alert("Enter all required fields.")
    }

    try{
        const res = await axios.post("http://localhost:5000/api/doctor/login",{email, password});
        navigate('/');
    }
    catch{
       setError("Invalid username or password.");
    }
  }

  const handleEmail = (e) => {
      setemail(e.target.value);
  }

  const handlePassword = (e) => {
      setpassword(e.target.value);
  }


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
    color: '#000000',
    width: '500px',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
                onChange={handleEmail}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handlePassword}
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
                onClick={handleLogin}
              >
                Submit
              </button>
              <p className="text-danger">{error}</p>
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