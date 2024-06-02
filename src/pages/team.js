import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Conponenty/navbar";
import Footer from "../Conponenty/footer";
import Developers from "../Conponenty/developers";
import React from "react";

function Team() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Developers />
        <Footer />
      </div>
    </>
  );
}
export default Team;
