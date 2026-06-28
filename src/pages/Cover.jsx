import React from "react";
import './Cover.css';
import hackphoto from '../assets/hackathon_photo.jpg';
import uwlogo from '../assets/waterloo_logo.png';
import laurierlogo from '../assets/laurier_logo.png';

const Cover = React.forwardRef((props, ref) => {

    const positions = [
        { top: '8%', left: '8%', transform: 'rotate(15deg)' },
        { top: '5%', right: '8%', transform: 'rotate(-10deg)' },
        { bottom: '15%', right: '5%', transform: 'rotate(25deg)' },
        { bottom: '8%', left: '35%', transform: 'rotate(-5deg)' },
        { top: '45%', left: '19%', transform: 'rotate(20deg)' },
    ]

    return (
        <div className="cover" ref={ref}>
            <div id="spine"></div>
            <img id="coverphoto" src={hackphoto} alt="Kami Afolabi" />
            <div id="photocaption">hackathon '26</div>
            <div className="strip" id="namestrip"> &emsp;Kami Afolabi&emsp; </div>
            <div className="strip" id="degreestrip">&emsp;UW / WLU Double Degree Student&emsp;</div>
            <div className="strip" id="portfoliostrip">&emsp;My Portfolio&emsp;</div>
            <img id="uwlogo" className="logo" src={uwlogo} alt="University of Waterloo's Logo" />
            <img id="laurierlogo" className="logo" src={laurierlogo} alt="Wilfrid Laurier University's Logo" />
            <div className="sagecovertape" id="waterloologotape">&emsp;</div>
            <div className="sagecovertape" id="laurierlogotape">&emsp;</div>
            <div id="coverwashitape">&emsp;</div>
            {positions.map((pos, index) => (
                <svg key={index} className="doodle-star" style={{...pos, position: 'absolute', width: '2%'}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="2" x2="10" y2="18" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="2" y1="10" x2="18" y2="10" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="4" y1="4" x2="16" y2="16" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="16" y1="4" x2="4" y2="16" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            ))}
        </div>
    );
});

export default Cover