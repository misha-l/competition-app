import React from "react";
import "./Register.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
// import LoginForm from "../../LoginForm/LoginForm";
import Signup from "../../auth/Signup";
import { FaRegUserCircle } from "react-icons/fa";


const Register = () => {
  return (
    <Pagecontainer>
      <div className="loginform">
        <div className="loginform__main">
          <FaRegUserCircle />
          <span>РЕГИСТРАЦИЯ:</span>

          <Signup />
          <div className="login-bottom-links">
          <a href="/Login">
            <b>вход</b>
          </a>
          <b>&nbsp;/&nbsp;</b>
          <a href="/todo">
            <i>забравена парола</i>
          </a>
          </div>
        </div>
        <div className="loginform__fg">
                    <p>ако искате<br />само да харесате рисунка<br />може да влезте с:</p>
        </div>
      </div>
    </Pagecontainer>
  );
};

export default Register;
