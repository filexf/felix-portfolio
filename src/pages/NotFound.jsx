import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Correction ici
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh", // Pour centrer verticalement
      }}
    >
      <h1>
        <b>404 - Page not found</b>
      </h1>
      <h1>
        <b>
          You may have gotten lost, go back to the main page:
        </b>
      </h1>

      <button className="home-button">
        <Link to="/">Back home</Link>

      </button>
    </div>
  );
}
