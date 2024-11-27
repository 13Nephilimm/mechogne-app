import React from "react";
import "./Card.css";

const Card = ({ heading }) => {
  return (
    <div className="card">
      <div className="image-box"></div>
      <div className="text-box">
        <h2 className="card-heading">{heading}</h2>
      </div>
    </div>
  );
};

export default Card;
