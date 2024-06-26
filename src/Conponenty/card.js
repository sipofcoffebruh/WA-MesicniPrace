import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import { motion } from "framer-motion";

const Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

function Karta(props) {
  return (
    <motion.div
      className="card p-1 m-5"
      style={{ maxHeight: "800px", maxWidth: "400px" }}
      initial="hidden"
      whileInView="visible"
      variants={Variants}
    >
      <img
        src={props.img}
        className="card-img-top img-fluid "
        alt="karta"
        style={{ width: "100%", height: "300px" }}
      />
      <div className="card-body">
        <h2 className="card-title mt-5">{props.title}</h2>
        <p className="card-text mt-5">{props.text}</p>
        <a className="button-86 m-5" href={props.href}>
          {props.info}
        </a>
      </div>
    </motion.div>
  );
}

export default Karta;
