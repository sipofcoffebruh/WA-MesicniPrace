import React from "react";
import Navbar from "../Conponenty/navbar";
import Login from "../Conponenty/Login";
import HlaviPage from "../Conponenty/hlavniPage";

function Hlavni() {
  return (
    <div className="App">
      <div className="App-header">
        <title>Realitky</title>

        <Navbar />
        <HlaviPage />
        <Login />
      </div>
    </div>
  );
}

export default Hlavni;
