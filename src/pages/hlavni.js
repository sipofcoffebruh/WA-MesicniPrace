import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../Conponenty/navbar";
import LoginPage from "../Conponenty/loginPage";
import HlaviPage from "../Conponenty/hlavniPage";
import HlavniPage from "../Conponenty/hlavniPage";
import Footer from "../Conponenty/footer";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Hlavni() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        //value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          console.log(user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, [user]);

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          <div className="App">
            <Navbar />
            <HlavniPage />
            <HlaviPage />
            <LoginPage />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <h1>User is not Logged</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go back to Sign In
          </button>
        </>
      )}
    </div>
  );
}
export default Hlavni;
