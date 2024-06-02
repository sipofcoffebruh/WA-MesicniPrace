import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoSmall from "../Conponenty/images/logoSmall.png";
import "./App.css";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Variants = {
  hidden1: { scale: 0.8 },
  visible1: {
    opacity: 0.8,
    scale: 1,
    transition: { duration: 2, delay: 0.2 },
  },
};

function Navbar(props) {
  const supabase = createClient(
    "https://imhpbtahieylppvxmkul.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
  );

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    window.location.href = "/";
  }

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        //value.data.user
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-sm position-fixed container-fluid bg-body-tertiary position-fixed navbar-custom">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img
              src={logoSmall}
              alt="house"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active jaini-purva-regular"
                  aria-current="page"
                  href="/"
                >
                  Domů
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link jaini-purva-regular" href="/investing">
                  Investovaní
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link jaini-purva-regular" href="/team">
                  Náš tým
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link jaini-purva-regular" href="/prodej">
                  Prodej
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center">
                {Object.keys(user).length !== 0 ? (
                  <>
                    <button className="button2" onClick={() => signOutUser()}>
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span>Odhlásit se</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button2"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span>Přihlásit se</span>
                    </button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid container-bg text-dark" id="/">
        <div>
          <motion.h1
            initial="hidden1"
            whileInView="visible1"
            variants={Variants}
          >
            {props.title}
          </motion.h1>
          <p>{props.text}</p>
        </div>
        <svg
          className="svg-overlay"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,288L60,288C120,288,240,288,360,277.3C480,267,600,245,720,245.3C840,245,960,267,1080,266.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Navbar;
