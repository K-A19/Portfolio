import React from "react";
import './Cover.css';
import hackphoto from '../assets/hackathon_photo.jpg';

const Cover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref}>
      <div id="photoframe"><img id="coverphoto" src={hackphoto} alt="Kami Afolabi" /></div>
      <div id="namestrip"> Kami Afolabi </div>
    </div>
  );
});

export default Cover