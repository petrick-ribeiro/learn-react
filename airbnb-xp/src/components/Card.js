import React from "react";
import imagePainting from "../images/painting.jpg";
import star from "../images/star.png";

// TODO:
// Make this more reusable with props.
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={imagePainting} />
      <div className="card-stats">
        <img className="card-star" src={star} />
        <span>4.7</span>
        <span className="gray">(25) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Learn professional Painting</p>
      <p>
        <span className="bold">From $75</span> / person{" "}
      </p>
    </div>
  );
}

export default Card;
