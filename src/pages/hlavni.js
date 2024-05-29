import React from "react";
import Navbar from "../Conponenty/navbar";
import Login from "../Conponenty/Login";
import HlaviPage from "../Conponenty/hlavniPage";
import Footer from "../Conponenty/footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Hlavni() {
  return (
          <div className="App">
            <Navbar />
            <HlaviPage />
            <Login />
            <Footer />
          </div>
  );
}

export default Hlavni;
