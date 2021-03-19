import React, { Component } from "react";
import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
<div className="footer">
  <div className="footer-in">
  <div className="footer__logo">
   <img src={`${process.env.PUBLIC_URL}/assets/images/logo2.png`} />
  </div>
  <div className="footer__links">
  <a href="#">За Конкурса</a><i>|</i>
  <a href="#">Връзка с Нас</a><i>|</i>
  <a href="#">BookPoint</a>
  </div>
  <div className="footer__socials">
  <p><span>Последвайте ни: </span><a href="#"><FaInstagram /></a><a href="#"><FaFacebookF /></a></p>
  </div>
  </div>
</div>
  );
};

export default Footer;
