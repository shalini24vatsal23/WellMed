import React from "react";
import NavBar from "../components/NavBar";
import SpecialCard from "../components/SpecialCard";
import '../style.css'; // Import your stylesheet

const DocData = [
  {
    name: "Dr Morrigan",
    image: "https://via.placeholder.com/150",
    exp: "3",
    speciality: "Cardiology",
    location: "UP",
    education: "MD Harvard",
  },
  // Add more doctor objects here following the same structure
];

function SpecialitiesPage() {
  return (
    <>
      <section className="specialities-page">
        <NavBar />
        <div className="specialities-grid" style={{ paddingTop: "90px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {DocData.map((doctor, index) => (
            <SpecialCard key={index} doctor={doctor} />
          ))}
        </div>
        <div className="specialities-grid" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {DocData.map((doctor, index) => (
            <SpecialCard key={index} doctor={doctor} />
          ))}
        </div>
        <div className="specialities-grid" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {DocData.map((doctor, index) => (
            <SpecialCard key={index} doctor={doctor} />
          ))}
        </div>
      </section>
    </>
  );
}

export default SpecialitiesPage;
