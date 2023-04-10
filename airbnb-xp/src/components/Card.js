import React from "react";
import star from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.image} />
      <div className="card-stats">
        <img className="card-star" src={star} />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person{" "}
      </p>
    </div>
  );
}

export default Card;
