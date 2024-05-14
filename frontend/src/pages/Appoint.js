import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import NavBar from '../components/NavBar';
import '../style.css';
import Footer from '../components/Footer';

function Appoint() {
    const [selectedDate, setSelectedDate] = useState(Date());
    const today = new Date(); // Get today's date

    // Function to disable Sundays
    const isSunday = date => {
        return date.getDay() !== 0; // 0 represents Sunday
    };

    return (
        <>
            <NavBar />
            <hr className='hori-line m-5'/>
            <div className='d-flex justify-content-center'>
                <div>
                    <p>Select date to book an appointment</p>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        minDate={today} // Disable past dates
                        filterDate={isSunday} // Disable Sundays
                        className='form-control'
                    />
                    <div><button className='pink-btn my-2'>Book Now</button></div>
                </div>
            </div>
            <section className='footer py-0'>
            <Footer/>
      </section>
        </>
    );
}

export default Appoint;
