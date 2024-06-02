import React from "react";
import Footer from "../Conponenty/footer";
import Navbar from "../Conponenty/navbar";
import Investing from "../Conponenty/investing";
import rekon from "../Conponenty/images/rekonstrukce.jpg";
import koupe from "../Conponenty/images/koupe.jpg";
import invest from "../Conponenty/images/investReal.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Conponenty/App.css";

const investingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ borderBottom: "4px solid black" }}
        >
          <div className="row text-center">
            <h1 className="display-1 m-5">Investování do nemovitostí</h1>
            <p>
              <a
                className="text-center button-84 m-5"
                href="mailto:nevim@example.com"
              >
                Objednejte si konzultaci zdarma! 📞
              </a>
            </p>
          </div>
        </div>
      </div>
      <Investing
        img={invest}
        title="Výhody investování do nemovitostí"
        s1="Stabilní zhodnocení kapitálu"
        s1text=": Nemovitosti mají tendenci zhodnocovat se v čase, což znamená, že hodnota vaší investice může růst."
        s2="Pasivní příjem"
        s2text=": Pronájem nemovitostí může generovat stabilní a pravidelný příjem."
        s3="Daňové výhody"
        s3text=": Investování do nemovitostí často nabízí různé daňové úlevy a odpočty."
      />
      <Investing
        img={koupe}
        title="Koupě bytu jako investice"
        s1="Lokalita"
        s1text=": Umístění nemovitosti výrazně ovlivňuje její hodnotu. Oblasti s rostoucí poptávkou po bydlení nebo blízkost k dopravním uzlům a službám jsou ideální"
        s2="Stav nemovitosti"
        s2text=": Posouzení současného stavu bytu pomůže odhadnout náklady na rekonstrukci."
        s3="Tržní cena"
        s3text=": Srovnání ceny nemovitosti s podobnými byty v okolí vám poskytne přehled o potenciální návratnosti investice."
      />
      <Investing
        img={rekon}
        title="Rekonstrukce"
        s1="Rozpočet"
        s1text=": Stanovte si realistický rozpočet, který zahrnuje všechny náklady na materiál, práci a případné nepředvídané výdaje"
        s2="Design a funkčnost"
        s2text=": Moderní a funkční design může výrazně zvýšit atraktivitu bytu pro potenciální kupce.</li>"
        s3="Tržní cena"
        s3text=": Srovnání ceny nemovitosti s podobnými byty v okolí vám poskytne přehled o potenciální návratnosti investice."
      />
      <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            borderBottom: "4px solid black",
            borderTop: "4px solid black",
          }}
        >
          <div className="row text-center">
            <h1 className="display-4 m-5">Co tahle tomu dát šanci</h1>
            <p>
              <a
                className="text-center button-84 m-2"
                href="mailto:nevim@example.com"
              >
                Objednejte si konzultaci 📞
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default investingPage;
