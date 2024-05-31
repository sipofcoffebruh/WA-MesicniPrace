import React from "react";
import Navbar from "../Conponenty/navbar";
import LoginPage from "../Conponenty/loginPage";
import Footer from "../Conponenty/footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = () => {
  return (
    <div>
            <Navbar />
            <Login />
            <Footer />
    </div>
  );
}

export default Login;