import React from "react";
import "./footer.css";

export const Footer = () => {
  // CSS in React-JS
  let footerStyle = {
    position: "relative",
    top: "0vh",
    width: "100%",
    border: "1px solid gray",
    backgroundColor: " #8b1f1ff2",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <footer className="text-center" style={footerStyle}>
      <p>Copyright &copy; 2023 Todos List</p>
    </footer>
  );
};
