import React from 'react';

const CircularProgressBar = ({ percentage }) => {
  const radius = 40; // Set the radius of the circle
  const circumference = 2 * Math.PI * radius; // Calculate the circumference
  const progress = circumference - (percentage / 100) * circumference; // Calculate the stroke-dashoffset
  const getColors = () => {
    if (percentage < 50) {
      return '#db191c';
    } else if (percentage < 60) {
      return '#d83b23';
    } else if (percentage < 70) {
      return '#f8b324';
    } else if (percentage < 80) {
      return '#16944f';
    } else {
      return '#0f4c9c';
    }
  };

  return (
    <svg height="100px" width="100px" className="CircularProgressBar">
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke={getColors()} // Change the color as needed
        strokeWidth="10" // Change the thickness as needed
        strokeDasharray={circumference}
        strokeDashoffset={progress}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".4em" fill={getColors()}>
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
