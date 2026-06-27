import React from "react";
import './Cover.css';
import hackphoto from '../assets/hackathon_photo.jpg';
const Cover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref}>
      <img id="coverphoto" src={hackphoto} alt="Kami Afolabi" />
      <div className="strip" id="namestrip"> &emsp;Kami Afolabi&emsp; </div>
      <div className="strip" id="degreestrip">&emsp;UW / WLU Double Degree Student&emsp;</div>
      <div className="strip" id="portfoliostrip">&emsp;My Portfolio&emsp;</div>
    </div>
  );
});

export default Cover