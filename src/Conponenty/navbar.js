import "bootstrap/dist/css/bootstrap.min.css";
import logoSmall from "../Conponenty/images/logoSmall.png";
import "./App.css";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import React from "react";

const Variants = {
  hidden1: { scale: 0.8 },
  visible1: {
    opacity: 0.8,
    scale: 1,
    transition: { duration: 2, delay: 0.2 },
  },
};

const Navbar = () => {
  const supabase = createClient(
    "https://imhpbtahieylppvxmkul.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
  );

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    window.location.href = "/";
  }

  return (
    <>
      <ul className="nav nav-item justify-content-center align-items-center position-fixed navbar-custom container-fluid ">
        <a className="nav-link active" href="/">
          <img
            src={logoSmall}
            alt="house"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
        <li className="nav-item active">
          <a className="nav-link text-dark bg-white bg-opacity-75" href="/">
            Domů
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark bg-white bg-opacity-75"
            href="/#sluzby"
          >
            Služby
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark bg-white bg-opacity-75"
            href="/prodej"
          >
            Prodej
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark bg-white bg-opacity-75" href="/team">
            Náš tým
          </a>
        </li>
        <li className="nav-pills ">
          <button onClick={() => signOutUser()}>Sign Out</button>
        </li>
      </ul>

      <div className="container-fluid container-bg text-dark" id="/">
        <div>
          <motion.h1
            initial="hidden1"
            whileInView="visible1"
            variants={Variants}
          >
            Skibidi realitky: Cesta k brainrottu
          </motion.h1>
          <p>zab se more</p>
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
    </>
  );
};

export default Navbar;
