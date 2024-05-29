import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div
          className="container-fluid mt-5"
          style={{
            height: "200px",
            backgroundColor: "#686D76",
          }}
        >
          <div className="row">
            <ul className="nav justify-content-center border-bottom pt-3 mt-3">
              <li className="nav-item ">
                <a href="#test" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#test" className="nav-link px-2 text-white">
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a href="#test" className="nav-link px-2 text-white">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="#test" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <div className="col-12 text-center mt-3">
              <p className="text-white">Copyright © 2024 Filip Else If & Meloun Nigien.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
