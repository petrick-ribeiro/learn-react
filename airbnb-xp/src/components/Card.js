import React from "react";
import star from "../images/star.png";

// TODO: Fix the images import
function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={`./images/${props.coverImg}`} />
      <div className="card-stats">
        <img className="card-star" src={star} />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person{" "}
      </p>
    </div>
  );
}

export default Card;
