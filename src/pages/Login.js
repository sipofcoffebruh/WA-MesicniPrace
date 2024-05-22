import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import houseImage from "../pages/house.jpg";
import { Application } from "@splinetool/runtime";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/lwbNy0C3mohnVGAZ/scene.splinecode");
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/5Fpkl6VmMNsEmMPy/scene.splinecode");
  }, []);

  useEffect(() => {
    const canvas4d = document.getElementById("canvas4d");
    const app = new Application(canvas4d);
    app.load("https://prod.spline.design/aIo3AYMboAmTmIOI/scene.splinecode");
  }, []);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/success");
      } else {
        navigate("/");
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [navigate]);

  const background = {
    background: "rgb(235,243,232)",
    background:
      "radial-gradient(circle, rgba(235,243,232,1) 0%, rgba(175,200,173,1) 47%, rgba(238,231,218,1) 60%, rgba(235,243,232,1) 100%)",
  };

  return (
    <div className="App" style={background}>
      <div className="App-header">
        <title>Realitky</title>

        <div className="container-fluid">
          <ul className="nav nav-tabs justify-content-center  bg-white ">
            <a className="nav-link active" href="#">
              Logo
            </a>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Disabled
              </a>
            </li>
          </ul>

          <div className="row" style={{ height: "1000px" }}>
            <canvas
              id="canvas3d"
              style={{ width: "300px", height: "200" }}
            ></canvas>
          </div>
        </div>
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
                    We are team of talented designers making websites with
                    Bootstrap
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
                          <a href="#" className="btn btn-primary mt-4">
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
            <div
              className="container-fluid mt-5  bg-white bg-opacity-25 rounded-4"
              style={{ height: "100vh" }}
            >
              <div className="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                  <h2 className="display-5 m-5">
                    Chcete prodat svou
                    <br />
                    nemovitost??
                  </h2>
                  <p>
                    Naše zkušenosti a odborné znalosti v oblasti realit vám
                    pomohou dosáhnout nejlepší možné ceny za vaši nemovitost.
                    Zajišťujeme komplexní služby včetně:
                  </p>
                  <p className="p-2 m-5">
                    <ul>
                      <li>Profesionální ocenění vaší nemovitosti</li>
                      <li>Marketing a propagace na různých platformách</li>
                      <li>Právní poradenství a administrativní podpora</li>
                      <li>Jednání s potenciálními kupci</li>
                      <li>
                        Vyřizování veškerých formalit spojených s prodejem
                      </li>
                    </ul>
                  </p>
                  <p>
                    Chápeme, že prodej nemovitosti je významný krok, a jsme tu,
                    abychom zajistili, že vše proběhne hladce a bez stresu.
                    Kontaktujte nás ještě dnes a začněte svou cestu k úspěšnému
                    prodeji vaší nemovitosti.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-info m-5 p-3"
                  >
                    Napiste nam
                  </button>
                </div>
                <div className="col-sm-6">
                  <canvas
                    id="canvas"
                    style={{ width: "300px", height: "200" }}
                  ></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* Img Slider Section */}
          <section className="mt-5" id="imgslider">
            <div
              className="container-fluid pb-5 bg-white bg-opacity-25 rounded-4 d-flex align-items-center"
              style={{ height: "1000px" }}
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
                    exercitationem id praesentium, eos voluptatibus minus
                    possimus! Laudantium quod amet ullam voluptate ratione id
                    assumenda? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quibusdam possimus eum reiciendis. Eaque,
                    in, dignissimos tempora optio nemo earum culpa beatae
                    praesentium id distinctio maiores repellendus,
                    exercitationem consequatur voluptas tempore.
                  </p>
                  <p className="mb-1">
                    <span className="h5">Lorem ipsum dolor sitpellat</span>
                    <br /> Officia hic quibusdam, nisi voluptates aut ver
                  </p>
                </div>
                <div className="col-sm-6 d-flex align-items-center justify-content-center">
                  <canvas
                    id="canvas4d"
                    style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                  ></canvas>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-fluid mt-5  bg-white bg-opacity-25 rounded-4">
              <div className="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-6">
                  <img src={houseImage} className="img-fluid p-5" alt="House" />
                </div>
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
                    quidem assumenda ut perferendis iure. Repellendus?Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                    voluptas veniam et incidunt nesciunt similique, dicta ullam
                    eum laudantium mollitia, accusantium saepe distinctio magnam
                    dolor! Distinctio quis unde dolorum hic!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-info ms-5 p-3"
                  >
                    Napiste nam
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container mt-5  bg-white bg-opacity-25 rounded-4">
              <Auth
                supabaseClient={supabase}
                providers={["discord", "google"]}
                theme="dark"
                appearance={{ theme: ThemeSupa }}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
