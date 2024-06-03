import React from "react";
import Navbar from "../Conponenty/navbar";
import Hlavni from "../Conponenty/hlavni";
import Footer from "../Conponenty/footer";

function HlavniPage() {
  return (
    <div>
      <Navbar
        title="Realitní Senza: cesta k lepšímu bydlení       "
        text="vše co potřebujete pro váš nový domov"
      />
      <Hlavni />
      <Footer />
    </div>
  );
}
export default HlavniPage;
