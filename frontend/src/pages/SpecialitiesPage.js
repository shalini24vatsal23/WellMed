import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SpecialCard from "../components/SpecialCard";
import '../style.css';
import { Link, useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import axios from 'axios';

function SpecialitiesPage() {
  const [docData, setDocData] = useState([]);
  const location = useLocation();
  const specialization = new URLSearchParams(location.search).get('specialization');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/specialization?specialization=${encodeURIComponent(specialization)}`);
        setDocData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (specialization) {
      fetchDoctors();
    }
  }, [specialization]);

  return (
    <>
      <section className="specialities-page">
        <NavBar />
        <div className="specialities-grid" style={{ paddingTop: "90px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {docData.map((doctor, index) => (
            <Link to='/Appoint' key={index}>
              <SpecialCard doctor={doctor} />
            </Link>
          ))}
        </div>
       
      </section>
      <section className='footer py-0'>
        <Footer />
      </section>
    </>
  );
}

export default SpecialitiesPage;
