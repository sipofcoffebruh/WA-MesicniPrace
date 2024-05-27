import React, { useEffect } from "react";
import houseImage from "../pages/house.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import { Application } from "@splinetool/runtime";

const Hlavni = () => {
  useEffect(() => {
    const canvas4d = document.getElementById("canvas4d");
    const app = new Application(canvas4d);
    app.load("https://prod.spline.design/aIo3AYMboAmTmIOI/scene.splinecode");

    const handleResize = () => {
      canvas4d.style.width = "100%";
      canvas4d.style.height = "100%";
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the canvas size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
      {/* Hlavicka */}
      <section className="pt-5">
        <div className="container-fluid  bg-white bg-opacity-25 rounded-4">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="p-5">
                Better Solutions For <br /> Your Business
              </h1>
              <h3 className="p-5">
                We are team of talented designers making websites with Bootstrap
              </h3>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={houseImage} alt="House" className="img-fluid p-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Nase Sluzby */}
      <section>
        <div className="container-fluid mb-5 bg-white bg-opacity-25 rounded-4">
          <div className="row d-flex flex-row justify-content-center mt-5 mb-5">
            <h2 id="sluzby" className="display-5 text-center p-3 mt-5 mb-5">
              Naše služby
            </h2>
            {["prodej nemovitosti", "poradenství", "koupě nemovitosti"].map(
              (title, index) => (
                <div className="col-sm-3 p-5" key={index}>
                  <div className="card h-100 shadow-sm mb-5 pb-5">
                    <img
                      className="card-img-top mx-auto pt-3"
                      src={houseImage}
                      alt="Card"
                      style={{ width: "70%", borderRadius: "10px" }} // Adjust the width to make the image smaller
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title mt-3">{title}</h4>
                      <p className="card-text mt-3">
                        Some example text some example text. John Doe is an
                        architect and engineer.
                      </p>
                      <a href="#nevim" className="btn btn-primary mt-4">
                        See Profile
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Prodej Section */}
      <section id="prodej">
        <div className="container-fluid mt-5  bg-white bg-opacity-25 rounded-4">
          <div className="row mt-5">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <h2 className="display-5 m-5">
                Chcete prodat svou
                <br />
                nemovitost??
              </h2>
              <p>
                Naše zkušenosti a odborné znalosti v oblasti realit vám pomohou
                dosáhnout nejlepší možné ceny za vaši nemovitost. Zajišťujeme
                komplexní služby včetně:
              </p>
              <p className="p-2 m-5">
                <ul>
                  <li>Profesionální ocenění vaší nemovitosti</li>
                  <li>Marketing a propagace na různých platformách</li>
                  <li>Právní poradenství a administrativní podpora</li>
                  <li>Jednání s potenciálními kupci</li>
                  <li>Vyřizování veškerých formalit spojených s prodejem</li>
                </ul>
              </p>
              <p>
                Chápeme, že prodej nemovitosti je významný krok, a jsme tu,
                abychom zajistili, že vše proběhne hladce a bez stresu.
                Kontaktujte nás ještě dnes a začněte svou cestu k úspěšnému
                prodeji vaší nemovitosti.
              </p>
              <button type="button" className="btn btn-outline-info m-5 p-3">
                Napiste nam
              </button>
            </div>
            <div className="col-sm-6">
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  backgroundColor: "red",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Img Slider Section */}
      <section className="mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fill-opacity="0.8"
            d="M0,224L120,234.7C240,245,480,267,720,272C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid pb-5 bg-white bg-opacity-25 rounded-4 d-flex align-items-center"
          style={{ bg: "#273036" }}
        >
          <div className="row w-100">
            <div className="col-sm-1"></div>
            <div className="col-sm-5 pt-5 d-flex flex-column justify-content-center">
              <h2>Nadpis 1</h2>
              <h2>Nadpis 2</h2>
              <h2>Nadpis 3</h2>
              <p className="mt-5 mb-5 m-lg-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis numquam, mollitia natus in vitae doloribus
                exercitationem id praesentium, eos voluptatibus minus possimus!
                Laudantium quod amet ullam voluptate ratione id assumenda? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
                possimus eum reiciendis. Eaque, in, dignissimos tempora optio
                nemo earum culpa beatae praesentium id distinctio maiores
                repellendus, exercitationem consequatur voluptas tempore.
              </p>
              <p className="mb-1">
                <span className="h5">Lorem ipsum dolor sitpellat</span>
                <br /> Officia hic quibusdam, nisi voluptates aut ver
              </p>
            </div>
            <div
              className="col-sm-6 d-flex align-items-center justify-content-center"
              style={{ minWidth: "50%" }}
            >
              <canvas
                id="canvas4d"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "800px",
                  minHeight: "700px",
                }}
              ></canvas>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mt-5  bg-white bg-opacity-25 rounded-4">
          <div className="row mt-5">
            <div className="col-sm-1"></div>
            <div className="col-sm-6"></div>
            <div className="col-sm-5">
              <h2 className="display-5 m-5">
                Chcete prodat svou
                <br />
                nemovitost??
              </h2>
              <p className="p-2 m-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam cupiditate consequatur molestiae ea dolor saepe at
                labore libero doloribus blanditiis dolorem, ab quia alias,
                quidem assumenda ut perferendis iure. Repellendus?Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Ipsa, voluptas
                veniam et incidunt nesciunt similique, dicta ullam eum
                laudantium mollitia, accusantium saepe distinctio magnam dolor!
                Distinctio quis unde dolorum hic!
              </p>
              <button type="button" className="btn btn-outline-info ms-5 p-3">
                Napiste nam
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hlavni;
