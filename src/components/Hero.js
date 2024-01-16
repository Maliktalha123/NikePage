import React from "react";
import "../App.css";
import Facebooklogo from "./facebook.png";
import Amazonlogo from "./amazon.png";
import NikeShoes from "./NikeShoes2.jpg";
function Hero() {
  return (
    
    <div className="hero container">
      <div className="Hero-Content">
        <h1>Your Feet Deserve The Better</h1>
        <p>
          your feet desrve the beeter and we are here to help you with our
          shoes.your feet deserve the best and we're here to help you with our
          shoes.
        </p>
        <div className="buttonDiv">
          <button className="firstButton">Shop Now</button>
          <button className="secondButton">Category</button>
        </div>
        <div className="moreLinks">
          <p>Also Available On</p>
          <img
            src={Facebooklogo}
            className="Facebook-logo"
            alt="Facebook Logo"
          />
          <img src={Amazonlogo} alt="Amazon Logo" className="Amazon-logo" />
        </div>
      </div>

      <div >
        <img src={NikeShoes} className="Hero-Image"  alt="Nike Shoes" />
      </div>
    </div>
  );
}
export default Hero;
