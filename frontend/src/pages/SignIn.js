import React, { useState } from 'react';
import '../style.css'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
return (
  <div className="Auth-form-container">
  <form className="Auth-form">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign In</h3>
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
      <button type="submit" style={{
  backgroundColor: '#fe5757',
  color: '#ffffff',  
  border: '1px solid #ffffff',  
  borderRadius: '6px'           
}}>
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
  <div className="background-image"></div>
</div>
  );
};

export default LoginPage;