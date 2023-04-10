import React from "react";
import image from "../images/airbnb_logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav-logo" src={image} />
    </nav>
  );
}

export default Navbar;
