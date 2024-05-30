import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import Dkaj from "./images/dkaj.jpg";
import Filip from "./images/Filip.jpg";
import pes from "./images/pes.jpg";

const Developers = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center mt-5 mb-5">Náš tým</h1>
        </div>
      </div>

      <section className="pb-5">
        <div className="container-fluid">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={Dkaj}
                  class="card-img img-fluid"
                  alt="..."
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <h2 className="card-title mt-2 mb-5">Meloun Nigien</h2>
                  <p className="card-text">
                    Jsem Vietnamcem a nedávno jsem pracoval na vývoji webové
                    stránky, což byla pro mě skvělá zkušenost. Práce na tomto
                    projektu mě opravdu bavila, protože jsem mohl využít své
                    dovednosti v oblasti webového designu a programování. Byla
                    to příležitost nejen k profesionálnímu růstu, ale také k
                    objevování nových technologií a metod. Kromě své práce mám
                    velkou zálibu v kočkách, které mi přinášejí radost a
                    odpočinek po náročném dni. Kombinace mého profesního života
                    a chutí koček v mém jidlu vyvážený a spokojený život.
                  </p>
                  <p className="card-text">
                    <small className="text-muted mt-2">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container-fluid">
          <div className="card  mb-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={Filip}
                  class="card-img img-fluid"
                  alt="..."
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <h2 className="card-title mt-2 mb-5">Filip Else If</h2>
                  <p className="card-text">
                    Jsem běloch a nedávno jsem se podílel na tvorbě webové
                    stránky, což byla opravdu zábavná zkušenost. Práce na tomto
                    projektu mi přinesla spoustu radosti, protože jsem mohl
                    naplno využít své dovednosti v oblasti webového vývoje. I
                    když se občas dostanu do komických situací a udělám nějakou
                    tu chybu, vždy se na tom dokážu zasmát a poučit se. Tento
                    projekt mi umožnil nejen se vic nenavidet, ale také se
                    naucit ze i opravdu tlusty stůl jde rozbít.
                  </p>
                  <p className="card-text">
                    <small className="text-muted mt-2">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: "200px" }}>
        <div className="container-fluid">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={pes}
                  class="card-img img-fluid"
                  alt="..."
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <h2 className="card-title mt-2 mb-5">Megoooonieee</h2>
                  <p className="card-text">
                    Haf haf, wouf wouf! Haaaf haaaf, wofff wofff. Haw haw,
                    vrrrrr, haf! Wouf wouf, haaaf haaaf! Vrrrrr, wofff wofff,
                    haw haw. Haf haf, vrrrrr, haaaf! Haaaf haaaf, wofff wofff.
                    Haw haw, vrrrrr, haf! Haf haf, wouf wouf! Haf haf, wouf
                    wouf! Haaaf haaaf, wofff wofff. Haw haw, vrrrrr, haf! Wouf
                    wouf, haaaf haaaf! Vrrrrr, wofff wofff, haw haw. Haf haf,
                    vrrrrr, haaaf! Haaaf haaaf, wofff wofff. Haw haw, vrrrrr,
                    haf! Haf haf, wouf wouf!
                  </p>
                  <p className="card-text">
                    <small className="text-muted mb-2">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
