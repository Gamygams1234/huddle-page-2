import React from "react";
import logo from "../images/logo.svg";
import illustration from "../images/illustration-mockups.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="top-header mb-5">
          <img src={logo} alt="" />
          <button type="button" class="btn btn-outline-dark fw-600">
            Try it free
          </button>
        </div>
        <div className="bottom-header">
          <div className="left-side grid-item mb-5 mt-5">
            <h1 className="fw-600 mb-3">Build The Community Your Fans Will Love</h1>
            <p className="fw-400 mb-4">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button type="button" class="btn btn-pink fw-600">
              Get Started For Free
            </button>
          </div>
          <div className="right-side mb-5 mt-5 grid-item">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
