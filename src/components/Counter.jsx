import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  //  Fonction  décrémentation
  function decrementer() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }
 

  let message = null;
  if (count === 10) {
    message = (
      <p style={{ marginTop: "20px", color: "#e67e22", fontWeight: "bold" }}>
        🎉 Vous avez atteint 10 !
      </p>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Compteur : <span style={{ color: "#2E75B6" }}>{count}</span>
      </h2>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>

        {/* Bouton Décrémenter */}
        <button
          onClick={decrementer}  //  On appelle juste la fonction
          style={{
            padding: "10px 24px",
            fontSize: "1.2rem",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          − Décrémenter
        </button>

        {/* Bouton Incrémenter */}
        <button
          onClick={  () => setCount(count + 1)}
          style={{
            padding: "10px 24px",
            fontSize: "1.2rem",
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          + Incrémenter
        </button>

        {/* Bouton Réinitialiser */}
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "10px 24px",
            fontSize: "1.2rem",
            backgroundColor: "#7f8c8d",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ↺ Réinitialiser
        </button>

      </div>

      {message}
    </div>
  );
}

export default Counter;