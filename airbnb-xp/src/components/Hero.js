import React from "react";
import image from "../images/grid.png"

function Hero() {
  return (
    <section className="hero">
      <img className="hero-grid" src={image} />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities les by one-of-a-king hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
