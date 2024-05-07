import React from "react";
import '../style.css';

/*const DocData = [
  {
    name: "Dr Morrigan",
    image: "https://via.placeholder.com/150",
    exp: "3",
    speciality: "Cardiology",
    location: "UP",
    education: "MD Harvard",
  },
  // Add more doctor objects here following the same structure
];*/
  const cardStyles = {
  display: "flex", // Maintain flexbox display
  flexDirection: "row", // Change to row for horizontal layout
  alignItems: "center", // Align content vertically within the card
  padding: "20px",
  margin: "10px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  width: "660px",
  height: "150px",
};
const imageStyles = {
  width: "130px",
  height: "130px",
  borderRadius: "50%",
};

function SpecialCard({ doctor }) {
  // Destructure the doctor object for easier access to properties
  const { name, image, exp, speciality, location, education } = doctor;

  return (
    <div className="special-card" style={cardStyles}>
      <img src={image} alt={name} style={imageStyles} />
      <div style={{ marginLeft: "20px", flex: 1 }}> {/* Text container with flex */}
        <h3 style={{ textAlign: "center",paddingTop: "5px" }}>{name}</h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "15px" }}> {/* Bullet points */}
          <li>Experience: {exp} years</li>
          <li>Speciality: {speciality}</li>
          <li>Location: {location}</li>
          <li>Education: {education}</li>
        </ul>
      </div>
    </div>
  );
}

export default SpecialCard;
