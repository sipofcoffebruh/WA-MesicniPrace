import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import CarouselComponent from "../pages/CarouselComponent.js";
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
    app.load("https://prod.spline.design/tupS-Y7XaLkGuCmK/scene.splinecode");
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
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,29,43,1) 61%, rgba(46,12,41,1) 100%, rgba(85,8,73,1) 100%)",
  };

  return (
    <div className="App" style={background}>
      <div className="App-header">
        <title>Realitky</title>
        <div
          className="container-fluid"
          style={{
            backgroundImage: { houseImage },
            height: "100vh",
          }}
        >
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Logo
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#sluzby">
                    sluzby
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#prodej">
                    prodej
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#imgslider">
                    imgslider
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="container-fluid text-white">
          {/* Hlavicka */}
          <section className="pt-5">
            <div className="container-fluid">
              <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className="p-5">
                    Better Solutions For <br /> Your Business
                  </h1>
                  <h3 className="p-5 text-muted">
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
            <div className="container mb-5">
              <div className="row d-flex flex-row justify-content-center mt-5 mb-5">
                <h2 id="sluzby" className="display-4 p-3 mt-5 mb-5">
                  Nase služby
                </h2>
                {["prodej nemovitosti", "poradenství", "koupě nemovitosti"].map(
                  (title, index) => (
                    <div className="col-sm-4 p-4" key={index}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={houseImage}
                          alt="Card"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title p-2 m-4">{title}</h4>
                          <p className="card-text p-2 m-4">
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <a href="#" className="btn btn-primary p-2 m-4">
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
            <div className="container-fluid mt-5">
              <div className="row mt-5">
                <div className="col-sm-1"></div>
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
                    className="btn btn-outline-info m-5 p-3"
                  >
                    Napiste nam
                  </button>
                </div>
                <div className="col-sm-6">
                  <canvas id="canvas3d" style={{ width: "100%" }}></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* Img Slider Section */}
          <section className=" mt-5" id="imgslider">
            <div className="container-fluid pb-5">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-5 pt-5">
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
                <div className="col-sm-6">
                  <CarouselComponent />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-fluid mt-5">
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
            <div className="container mt-5">
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
