import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Conponenty/navbar";
import Footer from "../Conponenty/footer";
import Developers from "../Conponenty/developers";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Team() {
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
            <Developers />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <h1>User is not Logged</h1>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Go back to Sign In
          </button>
        </>
      )}
    </div>
  );
}
export default Team;
