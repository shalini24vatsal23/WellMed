import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../style.css';
import backgroundImage from '../images/signin.png';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpDoctor() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [state, setState] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!firstname || !lastname || !email || !password || !education || !specialization || !state) {
        alert('Enter all required fields');
      } else {
        await axios.post("http://localhost:5000/api/doctor/signup", { firstname, lastname, email, password, education, specialization, state });
        navigate('/'); 
        alert("Login to your account.");
      }
    } catch (error) {
      alert("Email is already in use. Use a different email address.");
    }
  }

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
      <NavBar />
      <div className="Auth-form shadow border border-1 border-lightgrey rounded p-5" style={{ backgroundColor: 'white' }}>
        <div className="Auth-form-content">
          <h3>Sign Up As Doctor</h3>

          <form onSubmit={handleSignUp}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
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
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>Education</label>
                  <Form.Select aria-label="Default select example" value={education} onChange={(e) => setEducation(e.target.value)}>
                  <option selected>Select</option>
                    <option value="MBBS (Undergraduate)">MBBS (Undergraduate)</option>
                    <option value="MD (Postgraduate)">MD (Postgraduate)</option>
                  </Form.Select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>Specialization</label>
                  <Form.Select aria-label="Default select example" value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                  <option selected>Select</option>
                    <option value="Flu">Flu</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Child Care">Child Care</option>
                    <option value="Kidney Issues">Kidney Issues</option>
                    <option value="Anxiety and Depression">Anxiety and Depression</option>
                    <option value="General Health">General Health</option>
                    <option value="Stomach Issues">Stomach Issues</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Gynaecology">Gynaecology</option>
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>State/UT</label>
                  <Form.Select aria-label="Default select example" value={state} onChange={(e) => setState(e.target.value)}>
                    <option selected>Select</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option disabled></option>
                    <option disabled>Union Territories</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Puducherry">Puducherry</option>
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
              Already have an account? <a href="#">Sign In</a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpDoctor;
