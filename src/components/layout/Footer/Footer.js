import React from "react";
import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-in">
        <div className="footer__logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo2.png`}
            alt="Logo"
          />
        </div>
        <div className="footer__links">
          <a href="/todo">За Конкурса</a>
          <i>|</i>
          <a href="/todo">Връзка с Нас</a>
          <i>|</i>
          <a href="/todo">BookPoint</a>
        </div>
        <div className="footer__socials">
          <p>
            <span>Последвайте ни: </span>
            <a href="/todo" className="social-icons">
              <FaInstagram />
            </a>
            <a href="/todo" className="social-icons">
              <FaFacebookF />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
