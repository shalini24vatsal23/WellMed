import React, { useState, useEffect, useRef } from "react";
import io from 'socket.io-client';
import NavBar from "../components/NavBar";
import SpecialCard from "../components/SpecialCard";
import '../style.css';
import { Link, useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import axios from 'axios';

const socket = io('http://localhost:5000'); // Replace with your server URL

function SpecialitiesPage() {
  const [docData, setDocData] = useState([]);
  const location = useLocation();
  const specialization = new URLSearchParams(location.search).get('specialization');
  const [isInCall, setIsInCall] = useState(false);
  const remoteVideoRef = useRef(null);

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

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('remote-stream', (remoteStream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('remote-stream');
    };
  }, [specialization]);

  const startCall = (doctorId) => {
    // Get access to the user's camera and microphone
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Emit the 'join-call' event to the server with the local stream and doctor ID
        socket.emit('join-call', stream, doctorId);
        setIsInCall(true);
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  };

  return (
    <>
      <section className="specialities-page">
        <NavBar />
        <div className="specialities-grid" style={{ paddingTop: "90px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {docData.map((doctor, index) => (
            <Link to='' key={index}>
              <SpecialCard doctor={doctor} startCall={() => startCall(doctor._id)} />
            </Link>
          ))}
        </div>
        {isInCall && <video ref={remoteVideoRef} autoPlay></video>}
      </section>
      <section className='footer py-0'>
        <Footer />
      </section>
    </>
  );
}

export default SpecialitiesPage;