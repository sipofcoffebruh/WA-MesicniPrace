import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import "./App.css";

function investing(props) {
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
            fill="#2E3532"
            d="M0,320L40,309.3C80,299,160,277,240,245.3C320,213,400,171,480,170.7C560,171,640,213,720,218.7C800,224,880,192,960,176C1040,160,1120,160,1200,165.3C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid text-white"
          style={{ backgroundColor: "#2E3532" }}
        >
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center">
              <img
                src={props.img}
                alt="InvestingImage"
                style={{
                  width: "80%",
                  height: "auto",
                  paddingTop: "20px",
                  maxHeight: "600px",
                  maxWidth: "800px",
                }}
                className="rounded-5"
              />
            </div>
            <div className="col-sm-5">
              <motion.h2
                className="display-5 m-5"
                initial="hidden"
                whileInView="visible"
                variants={Variants}
              >
                <h2 style={{ fontSize: "45px" }}>{props.title}</h2>
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={Variants}
                className="p-2 m-5"
              >
                <ul style={{ fontSize: "25px" }}>
                  <li>
                    <strong>{props.s1}</strong>
                    {props.s1text}
                  </li>
                  <li>
                    <strong>{props.s2}</strong>
                    {props.s2text}
                  </li>
                  <li>
                    <strong>{props.s3}</strong>
                    {props.s3text}
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2E3532"
            d="M0,64L40,96C80,128,160,192,240,208C320,224,400,192,480,170.7C560,149,640,139,720,138.7C800,139,880,149,960,160C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default investing;
