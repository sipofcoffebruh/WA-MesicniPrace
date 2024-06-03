import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const NotLoggedIn = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 "></div>
          <div
            className="col-6 text-center mt-3"
            style={{ borderBottom: "4px solid black" }}
          >
            <h1>Pro pokračování se musíte přihlásit</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoggedIn;
