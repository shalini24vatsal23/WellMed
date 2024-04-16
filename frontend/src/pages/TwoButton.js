import React from 'react';
import '../style.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import SignIn1 from './LoginPage1';

function TwoButton() {
  const handleClickButton1 = () => {
    console.log('Button 1 clicked!');
  };

  const handleClickButton2 = () => {
    console.log('Button 2 clicked!');
  };

  return (
    <div>
      <NavBar/>
      <div className="container">
      <button className="center-button" onClick={handleClickButton1}>
        <Link to='/LoginPage' className='text-decoration-none text-dark' >
        For Doctors
        </Link>
      </button>
      <span></span>
      <button className="center-button" onClick={handleClickButton2}>
        <Link to='/LoginPage1'>For Patients</Link>
      </button>
    </div>
    </div>
  );
}

export default TwoButton;
