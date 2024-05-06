import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://imhpbtahieylppvxmkul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaHBidGFoaWV5bHBwdnhta3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MzAyMTYsImV4cCI6MjAzMDMwNjIxNn0.pkiubXD_EW39TgtK0Luaje1re352g2I_X1Xfb42w4KI"
);

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    } else {
      navigate("/");
    }
  });

  return (
    <div className="App">
      <div className="App-header">
        <title>kokot</title>
        <Auth
          supabaseClient={supabase}
          providers={["discord", "google"]}
          theme="dark"
          appearance={{ theme: ThemeSupa }}
        />
        <h1>Login</h1>
      </div>
    </div>
  );
}

export default Login;
