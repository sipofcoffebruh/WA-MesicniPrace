import React from "react";
import houseImage1 from "../pages/house.jpg"; // Update the path as needed
import houseImage2 from "../pages/house2.jpg"; // Update the path as needed

const CarouselComponent = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={houseImage1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={houseImage2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={houseImage2} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default CarouselComponent;
