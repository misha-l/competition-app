import React from "react";
import "./Login.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
// import LoginForm from "../../LoginForm/LoginForm";
import Signin from "../../auth/Signin";
import { FaRegUserCircle } from "react-icons/fa";


const Login = () => {
  return (
    <Pagecontainer>
      <div className="loginform">
        <div className="loginform__main">
          <FaRegUserCircle />
          <span>ВХОД</span>

          <Signin />
          <div className="login-bottom-links">
          <a href="/signup">
            <b>регистрация</b>
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

export default Login;
