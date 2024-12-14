import React from "react";
import logo from "../../images/bus_619121.png";
import "./css/header.css";
import Profile from "../../pages/Profile";

const Header = () => {
  return (
    <div>
      <header className="landing-header">
        <div className="logo">
          <img src={logo} alt="Bus Logo" />
          <h1>LNCT Bus Management </h1>
        </div>
        <nav className="nav">
          <ul>
            <li className="display">
              <a href="#features">Features</a>
            </li>
            <li className="display">
              <a href="#about">About Us</a>
            </li>
            <li className="display">
              <a href="#contact">Contact</a>
            </li>
            <li>
              <span className="profile">
                <Profile />
              </span>
            </li>
            {/* <li>
              <a href="./loginPage/index.html" className="cta-button">
                Login / Signup
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
