import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Success() {
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
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    navigate("/");
  }

  return (
    <div className="App">
      <div className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>Success</h1>
            <button onClick={() => signOutUser()}>Sign Out</button>
          </>
        ) : (
          <>
            <h1>User is not Logged</h1>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Go back home
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Success;
