import React from "react";
import Navbar from "../Conponenty/navbar";
import Login from "../Conponenty/Login";
import HlaviPage from "../Conponenty/hlavniPage";
import Footer from "../Conponenty/footer";

function Hlavni() {
  return (
    <div className="App">
      <title>Realitky</title>

      <Navbar />
      <HlaviPage />
      <Login />
      <Footer />
    </div>
  );
}

export default Hlavni;
