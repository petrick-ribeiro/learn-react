import React from "react";

function Main(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      <img src="/target_logo.png" />
      <h2>{props.location}</h2>
      <p>{props.googleMapsUrl}</p>
      <h1>{props.title}</h1>
      <h3>
        {props.startDate} - {props.endDate}
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Main;
