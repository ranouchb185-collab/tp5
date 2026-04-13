import React from "react";

function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center p-3 mt-4">
      <p>© {annee} TechStore</p>
    </footer>
  );
}

export default Footer;