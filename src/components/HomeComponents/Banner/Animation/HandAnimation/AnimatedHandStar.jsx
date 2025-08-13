import React from "react";
import { FaRegStar } from "react-icons/fa";
import handImg from "../../../../../assets/icons/open-hand.png"; // Adjust path as needed
import "./AnimatedHandStar.css"; // Assuming you have a CSS file for styling


const AnimatedHandStar = () => (
  <div className="hand-star-anim-container">
    <div className="star-anim">
      <FaRegStar className="star-icon" />
      <div className="star-rays">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`ray ray-${i + 1}`}></span>
        ))}
      </div>
    </div>
    <img src={handImg} alt="Hand" className="hand-img mt-4" />
    
  </div>
);

export default AnimatedHandStar;
