import React from "react";
import './Cover.css';
import hackphoto from '../assets/hackathon_photo.jpg';
import uwlogo from '../assets/waterloo_logo.png';
import laurierlogo from '../assets/laurier_logo.png';

const Cover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref}>
      <div id="spine"></div>
      <img id="coverphoto" src={hackphoto} alt="Kami Afolabi" />
      <div className="strip" id="namestrip"> &emsp;Kami Afolabi&emsp; </div>
      <div className="strip" id="degreestrip">&emsp;UW / WLU Double Degree Student&emsp;</div>
      <div className="strip" id="portfoliostrip">&emsp;My Portfolio&emsp;</div>
      <img id="uwlogo" className="logo" src={uwlogo} alt="University of Waterloo's Logo" />
      <img id="laurierlogo" className="logo" src={laurierlogo} alt="Wilfrid Laurier University's Logo" />
      <div className="sagecovertape" id="waterloologotape">&emsp;</div>
      <div className="sagecovertape" id="laurierlogotape">&emsp;</div>
    </div>
  );
});

export default Cover