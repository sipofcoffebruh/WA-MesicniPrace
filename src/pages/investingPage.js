import React from "react";
import Footer from "../Conponenty/footer";
import Navbar from "../Conponenty/navbar";
import Investing from "../Conponenty/investing";
import rekon from "../Conponenty/images/rekonstrukce.jpg";
import koupe from "../Conponenty/images/koupe.jpg";
import invest from "../Conponenty/images/investReal.jpg";
import Quick from "../Conponenty/quick.js";

const investingPage = () => {
  return (
    <>
      <Navbar title="Vitejte v Investovani" />
      <Quick />
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
      <Quick />
      <Footer />
    </>
  );
};

export default investingPage;
