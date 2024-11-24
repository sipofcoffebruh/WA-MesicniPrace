import React, { useEffect } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

const supabase = createClient(
  "https://bviuhriolcuvayzbgzum.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2aXVocmlvbGN1dmF5emJnenVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MDgyOTksImV4cCI6MjA0NTA4NDI5OX0.A5c9eHjNu37OaCt9DTCr-aKFHvyG8z1X_dHLpxl7aRc"
);

const LoginPage2 = () => {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        window.location.href = "/";
      }
    });

    // Cleanup on unmount
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="container p-4 bg-white bg-opacity-25 rounded-4"
        style={{ maxWidth: "400px" }}
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
};

export default LoginPage2;
