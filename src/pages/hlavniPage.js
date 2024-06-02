import React from "react";
import Navbar from "../Conponenty/navbar";
import Hlavni from "../Conponenty/hlavni";
import Footer from "../Conponenty/footer";

function HlavniPage() {
  return (
    <div>
      <Navbar
        title="Skibidi Realitky: cesta k brainrottu"
        text="zab se more dik"
      />
      <Hlavni />
      <Footer />
    </div>
  );
}
export default HlavniPage;
