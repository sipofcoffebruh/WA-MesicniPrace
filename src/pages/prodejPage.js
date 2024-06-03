import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Conponenty/navbar";
import Footer from "../Conponenty/footer";
import ProdejPage from "../Conponenty/prodej";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NotLoggedIn from "../Conponenty/notLoggedIn";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Prodej() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user data:", error);
        return;
      }
      if (data?.user) {
        console.log("User data fetched:", data.user);
        setUser(data.user);
      }
    }
    getUserData();
  }, []);

  return (
    <div>
      {user ? (
        <div className="App">
          <Navbar
            titel="Určování cen nemovitostí"
            text="Náš zaměstnanec si prohlédne vaši nemovitost a poté určí cenu"
          />
          <ProdejPage />
          <Footer />
        </div>
      ) : (
        <>
          <Navbar title="Prosím přihlaste se, aby jste mohl/a pokračovat" />

          <div className="container">
            <div className="row d-flex justify-content-center align-items-center  ">
              <NotLoggedIn />
              <button
                className="m-5 button-84"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Přejít na přihlášení
              </button>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default Prodej;
