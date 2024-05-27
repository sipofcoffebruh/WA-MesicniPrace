import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import houseImage from "../pages/house.jpg";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs justify-content-center  bg-white ">
        <a className="nav-link active" href="#neivm">
          <img
            src={houseImage}
            alt="house"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
        <li className="nav-item active">
          <a className="nav-link" href="#nevim">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nevim">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nevim">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nevim">
            Disabled
          </a>
        </li>
      </ul>

      <div className="row" style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Navbar;
