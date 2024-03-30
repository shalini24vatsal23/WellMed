import React from 'react';
import '../style.css';

function SignUpPatient() {
  return (
    <div className="auth-container d-flex justify-content-center align-items-center vh-100 m-3">
      <div className="Auth-form shadow border border-1 border-lightgrey rounded p-5">
        <div className="Auth-form-content">
          <h3>Sign Up As Patient</h3>
          
          <form action="">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mt-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="First Name"
                    required
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
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
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
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="pink-btn"
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
