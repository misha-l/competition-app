import React from "react";
import "./Register.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
// import LoginForm from "../../LoginForm/LoginForm";
import Signout from "../../auth/Signout";
import { FaRegUserCircle } from "react-icons/fa";


const Register = () => {
  return (
    <Pagecontainer>
      <div className="loginform">
        <div className="loginform__main">
          <FaRegUserCircle />
          <span>Регистрация:</span>

          <Signout />
          <div className="login-bottom-links">
          <a href="/signin">
            <b>вход</b>
          </a>
          <b>&nbsp;/&nbsp;</b>
          <a href="/todo">
            <i>забравена парола</i>
          </a>
          </div>
        </div>
        <div className="loginform__fg">
          <p>или влезте с:</p>
        </div>
      </div>
    </Pagecontainer>
  );
};

export default Register;
