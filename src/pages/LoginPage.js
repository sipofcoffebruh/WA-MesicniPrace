import React from "react";
import Login from "../Conponenty/loginPage.js";
import Navbar from "../Conponenty/navbar.js";
import Footer from "../Conponenty/footer.js";



function LoginPage(props) {
  return (
    <>
      <Navbar
        title="Aby jste mohli pokračovat prosím zaregistrujte,"
        text="pokud máte učet stačí se přihlásit"
      />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
