import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Login() {
  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // forwart to success url
      console.log("signed in");
      window.location.href = "/";
    } else {
    }
  });

  return (
    <section>
      <div
        className="container mt-5  bg-white bg-opacity-25 rounded-4"
        id="Prihlasit"
      >
        <Auth
          supabaseClient={supabase}
          providers={["discord", "google"]}
          theme="dark"
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </section>
  );
}

export default Login;
