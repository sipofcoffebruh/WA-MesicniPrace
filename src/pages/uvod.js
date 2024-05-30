import React from "react";
import Login from "../Conponenty/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import { motion } from "framer-motion";

const Variants = {
  hidden1: { scale: 0.8 },
  visible1: {
    opacity: 0.8,
    scale: 1,
    transition: { duration: 2, delay: 0.2 },
  },
};

const Uvod = () => {
  return (
    <div>
      <div className="container-fluid container-bg text-dark" id="/">
        <div>
          <motion.h1
            initial="hidden1"
            whileInView="visible1"
            variants={Variants}
          >
            Vítejte na našem webu
          </motion.h1>
          <p>prosim prihlaste se nebo zaregistrujte</p>
        </div>
        <svg
          className="svg-overlay"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L60,288C120,288,240,288,360,277.3C480,267,600,245,720,245.3C840,245,960,267,1080,266.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Login />
    </div>
  );
};

export default Uvod;
