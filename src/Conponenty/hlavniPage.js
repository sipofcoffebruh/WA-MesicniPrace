import React, { useEffect } from "react";
import houseImage from "../pages/house.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import { Application } from "@splinetool/runtime";
<<<<<<< Updated upstream
=======
import "./App.css";
import House3 from "../Conponenty/images/house3.png";
import Invest2 from "../Conponenty/images/Investing2.jpg";
>>>>>>> Stashed changes

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
    <>
      {/* Hlavicka */}
      <section id="test">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#94849B"
            fill-opacity="1"
            d="M0,0L30,16C60,32,120,64,180,80C240,96,300,96,360,122.7C420,149,480,203,540,208C600,213,660,171,720,176C780,181,840,235,900,256C960,277,1020,267,1080,229.3C1140,192,1200,128,1260,101.3C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid text-white "
          style={{ backgroundColor: "#94849B" }}
        >
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column  align-items-center">
              <h1 className="p-5">Skibidi realitní kanceláře</h1>
              <h3 className="p-5">
                "S námi začíná nová kapitola vašeho života"
              </h3>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={houseImage} alt="House" className="img-fluid p-5" />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#94849B"
            fill-opacity="1"
            d="M0,0L30,16C60,32,120,64,180,80C240,96,300,96,360,122.7C420,149,480,203,540,208C600,213,660,171,720,176C780,181,840,235,900,256C960,277,1020,267,1080,229.3C1140,192,1200,128,1260,101.3C1320,75,1380,85,1410,90.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* Nase Sluzby */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#A0AAB2"
            fill-opacity="1"
            d="M0,256L40,245.3C80,235,160,213,240,208C320,203,400,213,480,229.3C560,245,640,267,720,250.7C800,235,880,181,960,160C1040,139,1120,149,1200,149.3C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="container-fluid" style={{ backgroundColor: "#A0AAB2" }}>
          <div className="row d-flex flex-row justify-content-center">
            <h2 id="sluzby" className="display-5 text-center p-3 mt-5 mb-5">
              Naše služby
            </h2>
            {["prodej nemovitosti", "poradenství", "koupě nemovitosti"].map(
              (title, index) => (
                <div
                  className="col-sm-3 p-5"
                  key={index}
                  style={{ minWidth: "350px" }}
                >
                  <div className="card h-100 shadow-sm mb-5 pb-5">
                    <img
                      className="card-img-top mx-auto pt-3"
                      src={houseImage}
                      alt="Card"
                      style={{
                        width: "70%",
                        borderRadius: "10px",
                      }}
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#A0AAB2"
            fill-opacity="1"
            d="M0,192L40,176C80,160,160,128,240,128C320,128,400,160,480,144C560,128,640,64,720,48C800,32,880,64,960,74.7C1040,85,1120,75,1200,85.3C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* Prodej Section */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#C7CEDB"
            fill-opacity="1"
            d="M0,320L48,304C96,288,192,256,288,240C384,224,480,224,576,224C672,224,768,224,864,213.3C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid "
          style={{ backgroundColor: "#C7CEDB" }}
        >
          <div className="row">
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
            <div className="col-sm-6 d-flex justify-content-center align-content-center">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#C7CEDB"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,53.3C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* Img Slider Section */}
      <section className="mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7E9181"
            fill-opacity="1"
            d="M0,256L30,240C60,224,120,192,180,181.3C240,171,300,181,360,176C420,171,480,149,540,144C600,139,660,149,720,133.3C780,117,840,75,900,90.7C960,107,1020,181,1080,197.3C1140,213,1200,171,1260,144C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid  bg-opacity-25 d-flex align-items-center text-white"
          style={{ backgroundColor: "#7E9181" }}
        >
          <div className="row w-100">
            <div className="col-sm-1" style={{ backgroundColor: "" }}></div>
            <div
              className="col-sm-5 pt-5 d-flex flex-column justify-content-center"
              style={{ backgroundColor: "#7E9181" }}
            >
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
              style={{ minWidth: "50%", backgroundColor: "#7E9181" }}
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

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7E9181"
            fill-opacity="1"
            d="M0,256L80,218.7C160,181,320,107,480,96C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </section>

      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2E3532"
            fill-opacity="1"
            d="M0,320L40,309.3C80,299,160,277,240,245.3C320,213,400,171,480,170.7C560,171,640,213,720,218.7C800,224,880,192,960,176C1040,160,1120,160,1200,165.3C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container-fluid text-white"
          style={{ backgroundColor: "#2E3532" }}
        >
          <div className="row">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2E3532"
            fill-opacity="1"
            d="M0,64L40,96C80,128,160,192,240,208C320,224,400,192,480,170.7C560,149,640,139,720,138.7C800,139,880,149,960,160C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Hlavni;
