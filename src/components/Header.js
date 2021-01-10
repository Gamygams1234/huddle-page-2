import React from "react";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <div className = "header">
      <div className="container">
        <img src={logo} alt="" />
        <button>Try for free</button>
      </div>
    </div>
  );
}
