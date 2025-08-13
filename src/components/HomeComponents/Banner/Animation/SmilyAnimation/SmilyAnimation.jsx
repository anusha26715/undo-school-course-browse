import React from 'react';
import './SmilyAnimation.css';

const HappyKidsIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle id="eye-right" cx="65" cy="40" r="5" fill="#fff" />
<circle id="eye-left" cx="35" cy="40" r="5" fill="#fff" />
<line id="wink-stroke" x1="30" y1="40" x2="40" y2="40" stroke="#fff" strokeWidth="2" />
        {/* The line for the wink */}
        <line id="wink-stroke" x1="30" y1="40" x2="40" y2="40" stroke="#fff" strokeWidth="2" />
        <path id="mouth" d="M30 60 Q50 70 70 60" stroke="#fff" strokeWidth="2" fill="none" />
        <path id="heart" d="M50 80 Q45 70 40 75 T35 75 Q30 70 40 60 Q45 50 50 55 T60 55 Q70 65 65 75 T60 85 Z" fill="#fff" />
    </svg>
);

export default HappyKidsIcon;