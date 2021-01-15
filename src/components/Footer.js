import React from "react";
import logo from "../images/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <a href="#" class="logo">
              <img src={logo} alt="" />
            </a>
            <a href="#">
              <i class="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
            </a>
            <a href="#">
              <i class="fas fa-phone-volume"></i> Phone: +1-543-123-4567
            </a>
            <a href="#">
              <i class="fas fa-envelope"></i> example@fylo.com
            </a>
          </div>
          <div className="grid-item">
            <a href="#">About Us</a>
            <a href="#">What We Do</a>
            <a href="#">FAQ</a>
            <a href="#">Career</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="grid-item">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="copyright">
          <p>&#169; Copyright <span>{(new Date().getFullYear())}</span> Huddle. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
