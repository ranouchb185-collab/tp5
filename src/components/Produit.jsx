import React from 'react';
import { useState } from "react";

const Produit = ({ nom, prix, description, image, categorie }) => {
  const [afficher, setAfficher] = useState(false);
 
  const [quantite, setQuantite] = useState(1);
  const [favori, setFavori] = useState(false); // ← NOUVEAU

  const ajouterPanier = () => {
    alert(`${quantite} x "${nom}" ajouté(s) au panier !`);
  };

      // Couleur du badge selon la catégorie
  const couleurBadge = (cat) => {
    if (cat === "Informatique") return "bg-primary";
    if (cat === "Audio")        return "bg-warning text-dark";
    if (cat === "Mobile")       return "bg-success";
    if (cat === "Accessoire")   return "bg-secondary";
    return "bg-danger";
  };

  const augmenter = () => setQuantite(q => q + 1);
  const diminuer  = () => setQuantite(q => (q > 1 ? q - 1 : 1));

  const toggleFavori = () => setFavori(f => !f); // ← NOUVEAU
  const resetFavori  = () => setFavori(false);   // ← NOUVEAU

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm d-flex align-items-center">
       
        {/* ❤️ Bouton Like positionné en haut à droite */}
        <div className="w-100 d-flex justify-content-end px-3 pt-3">
          <button
            onClick={toggleFavori}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.6rem",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform: favori ? "scale(1.3)" : "scale(1)",
            }}
            title={favori ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            {favori ? "❤️" : "🤍"}
          </button>
        </div>

        <img
          src={image}
          className="card-img-top"
          alt={nom}
          style={{ height: "200px", width: "auto", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column w-100">
               {/* Badge catégorie */}
          <span className={`badge ${couleurBadge(categorie)} mb-2 align-self-start`}>
            {categorie}
          </span>
          <h5 className="card-title">{nom}</h5>

          {/* Badge Favori */}
          {favori && (
            <span className="badge bg-danger mb-2" style={{ width: "fit-content" }}>
              ❤️ Produit favori
            </span>
          )}

          <div
            className="card-text-container mb-2"
            style={{ minHeight: "60px", overflow: "hidden", transition: "all 0.3s ease" }}
          >
            {afficher && <p className="card-text">{description}</p>}
          </div>

          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => setAfficher(!afficher)}
          >
            {afficher ? "Masquer" : "Afficher"} description
          </button>

          <p className="fw-bold text-primary">{prix} dt</p>

          {/* Sélecteur de quantité */}
          <div className="d-flex align-items-center mb-3">
            <span className="me-2 fw-semibold">Quantité :</span>
            <button className="btn btn-outline-secondary btn-sm" onClick={diminuer}>−</button>
            <span className="mx-3 fw-bold fs-5" style={{ minWidth: "24px", textAlign: "center" }}>
              {quantite}
            </span>
            <button className="btn btn-outline-secondary btn-sm" onClick={augmenter}>+</button>
          </div>

          {quantite > 1 && (
            <p className="text-muted small mb-2">
              Total : <strong>{prix * quantite} dt</strong>
            </p>
          )}

          <button className="btn btn-success mt-auto mb-2" onClick={ajouterPanier}>
            Ajouter au panier
          </button>

          {/* ✅ Bouton Reset — affiché SEULEMENT si favori est true */}
          {favori && (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={resetFavori}
            >
              🔄 Retirer des favoris
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Produit;

