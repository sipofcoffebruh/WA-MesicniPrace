import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#686D76"
            d="M0,256L60,261.3C120,267,240,277,360,277.3C480,277,600,267,720,245.3C840,224,960,192,1080,192C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid"
          style={{
            height: "200px",
            backgroundColor: "#686D76",
          }}
        >
          <div className="row">
            <ul className="nav justify-content-center border-bottom pt-3 mt-3">
              <li className="nav-item ">
                <a href="/" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#test" className="nav-link px-2 text-white">
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a href="/team" className="nav-link px-2 text-white">
                  Náš team
                </a>
              </li>
              <li className="nav-item">
                <a href="#test" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <div className="col-12 text-center mt-3">
              <p className="text-white">
                Copyright © 2024 Filip Else If & Meloun Nigien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
