import { React, useState } from 'react';
import '../style.css';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPatient() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!firstname || !lastname || !email || !password || !gender || !age) {
        alert('Enter all required fields');
      } else {
        await axios.post("http://localhost:5000/api/patient/signup", { firstname, lastname, email, password, gender, age });
        navigate('/'); 
        alert("Login to your acount.")
      }
    } catch (error) {
      alert("Email is already in use. Use a different email address.");
    }
  }

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  }
  const handleLastname = (e) => {
    setLastname(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleGender = (e) => {
    setGender(e.target.value);
  }
  const handleAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <div className="auth-container d-flex justify-content-center align-items-center vh-100 m-3"
      style={{
        backgroundImage: `url(https://cdni.iconscout.com/illustration/premium/thumb/doctor-consults-patient-4739750-3972766.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <NavBar />
      <div className="Auth-form shadow border border-1 border-lightgrey rounded p-5" style={{ backgroundColor: 'white' }}>
        <div className="Auth-form-content">
          <h3>Sign Up As Patient</h3>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="First Name"
                    required
                    onChange={handleFirstname}
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
                    required
                    onChange={handleLastname}
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
                required
                onChange={handleEmail}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
                onChange={handlePassword}
              />
            </div>

            <div className="row align-items-center">
              <div className="col-md-6">
                <label>Gender</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="male"
                      name="gender"
                      id="male"
                      onChange={handleGender}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="female"
                      name="gender"
                      id="female"
                      onChange={handleGender}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>Age</label>
                  <input
                    type="number"
                    max={100}
                    min={1}
                    className="form-control mt-1"
                    placeholder="Age"
                    required
                    onChange={handleAge}
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="pink-btn"
                onClick={handleSignUp}
              >
                Submit
              </button>
            </div>
          </form>

          <p className="forgot-password text-right mt-2">
            <a href="#">Forgot password?</a>
          </p>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPatient;
