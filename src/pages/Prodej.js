import React from 'react';
import Navbar from "../Conponenty/navbar";
import Login from "../Conponenty/Login";
import HlaviPage from "../Conponenty/hlavniPage";
import Footer from "../Conponenty/footer";
import ProdejPage from '../Conponenty/prodejPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Prodej = () => {
  return (
    <div>
            <Navbar />
            <ProdejPage />
            <Footer />
    </div>
  );
};

export default Prodej;
