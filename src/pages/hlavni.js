import React from "react";
import Navbar from "../Conponenty/navbar";
import Login from "../Conponenty/Login";
import HlaviPage from "../Conponenty/hlavniPage";
import pozadi from "../pages/pozadi2.png";

function Hlavni() {
  return (
    <div className="App">
      <title>Realitky</title>

      <Navbar />
      <HlaviPage />
      <Login />
    </div>
  );
}

export default Hlavni;
