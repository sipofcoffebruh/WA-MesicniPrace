import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";

function Developers(props) {
  const Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#C7CEDB"
            d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,234.7C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="container-fluid">
          <div className="card">
            <div className="row ">
              <div className="col-md-4" style={{ backgroundColor: "#C7CEDB" }}>
                <img
                  src={props.img}
                  className="card-img img-fluid p-2 rounded-circle"
                  alt="..."
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div
                className="col-md-8 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#C7CEDB" }}
              >
                <div className="card-body">
                  <motion.h2
                    className="card-title mt-2 mb-5"
                    initial="hidden"
                    whileInView="visible"
                    variants={Variants}
                  >
                    <h2 style={{ fontSize: "25px" }}>{props.title}</h2>
                  </motion.h2>
                  <p className="card-text p-4" style={{ fontSize: "18px" }}>
                    {props.text}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#C7CEDB"
            d="M0,224L60,192C120,160,240,96,360,96C480,96,600,160,720,160C840,160,960,96,1080,58.7C1200,21,1320,11,1380,5.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default Developers;
