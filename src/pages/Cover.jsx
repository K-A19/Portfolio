import React from "react";
import './Cover.css';
import hackphoto from '../assets/hackathon_photo.jpg';
const Cover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref}>
      <img id="coverphoto" src={hackphoto} alt="Kami Afolabi" />
      <div className="strip" id="namestrip"> Kami Afolabi </div>
      <div className="strip" id="degreestrip"> UW / WLU Double Degree Student </div>
      <div className="strip" id="portfoliostrip"> My Portfolio</div>
    </div>
  );
});

export default Cover