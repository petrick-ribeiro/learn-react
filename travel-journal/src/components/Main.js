import React from "react";

function Main(props) {
  return (
    <>
    <div className="main">
      <div className="image-container">
      <img className="main-image" src={props.imageUrl} />
      </div>

      <div className="info-container">
        <div className="location-container">
          <img className="main-target" src="/map_target.png" />
          <h2 className="location-title">{props.location}</h2>
          <a className="gray" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h1 className="title">{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
    <hr />
    </>
  );
}

export default Main;
