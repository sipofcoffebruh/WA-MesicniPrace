import Navbar from "../Conponenty/navbar";
import Footer from "../Conponenty/footer";
import Developers from "../Conponenty/developers";
import React from "react";
import nuggi from "../Conponenty/images/dkaj.jpg";
import pes from "../Conponenty/images/pes.jpg";
import Filip from "../Conponenty/images/Filip.jpg";

function Team() {
  return (
    <>
      <div className="App">
        <Navbar title="Zde si můžete prohlídnout naše pracovníky" text="" />
        <Developers
          img={nuggi}
          title="Meloun Nigien"
          text="  Jsem Vietnamec a nedávno jsem pracoval na vývoji webové
          stránky, což byla pro mě skvělá zkušenost. Práce na tomto
          projektu mě opravdu bavila, protože jsem mohl využít své
          dovednosti v oblasti webového designu a programování. Byla
          to příležitost nejen k profesionálnímu růstu, ale také k
          objevování nových technologií a metod. Kromě své práce mám
          velkou zálibu v kočkách, které mi přinášejí radost a
          odpočinek po náročném dni. Kombinace mého profesního života
          a chutí koček v mém jidlu mi dává vyvážený a spokojený
          život."
        />
        <Developers
          img={Filip}
          title="Filip Else If"
          text="  Jsem běloch a nedávno jsem se podílel na tvorbě webové
          stránky, což byla opravdu zábavná zkušenost. Práce na tomto
          projektu mi přinesla spoustu radosti, protože jsem mohl
          naplno využít své dovednosti v oblasti webového vývoje. I
          když se občas dostanu do komických situací a udělám nějakou
          tu chybu, vždy se na tom dokážu zasmát a poučit se. Tento
          projekt mi umožnil nejen se víc nenávidet, ale také se
          naučit že i opravdu tlustý stůl jde rozbít.
"
        />
        <Developers
          img={pes}
          title="Megooonie"
          text="  Haf haf, wouf wouf! Haaaf haaaf, wofff wofff. Haw haw,
         vrrrrr, haf! Wouf wouf, haaaf haaaf! Vrrrrr, wofff wofff,
         haw haw. Haf haf, vrrrrr, haaaf! Haaaf haaaf, wofff wofff.
         Haw haw, vrrrrr, haf! Haf haf, wouf wouf! Haf haf, wouf
         wouf! Haaaf haaaf, wofff wofff. Haw haw, vrrrrr, haf! Wouf
         wouf, haaaf haaaf! Vrrrrr, wofff wofff, haw haw. Haf haf,
         vrrrrr, haaaf! Haaaf haaaf, wofff wofff. Haw haw, vrrrrr,
         haf! Haf haf, wouf wouf!"
        />
        <Footer />
      </div>
    </>
  );
}
export default Team;
