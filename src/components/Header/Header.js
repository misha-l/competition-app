import React from "react";
import "./Header.scss";
import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <div className="header">
      <div className="login"><a href="#"><FaRegUserCircle /><b>Вход</b></a>
      </div>
      <ul>
        <li><a href="/">Начало</a></li>
        <li><a href="#">Жури</a></li>
        <li><a href="/Gallery">Галерия</a></li>
        <li><a href="#">Финалисти</a></li>
        <li><a href="#">Правила</a></li>
      </ul>
      
      <span><a href="">Изпрати Рисунка</a></span>
    </div>
  );
};

export default Header;
