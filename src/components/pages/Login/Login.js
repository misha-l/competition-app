import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
// import LoginForm from "../../LoginForm/LoginForm";
import Signin from "../../auth/Signin";
import { FaRegUserCircle } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";

class Login extends React.Component {
  constructor(props) {
    super(props);
    /* where to redirect after succesful login */
    let redirectTo = "/";
    if (props && props.location && props.location.redirectTo) {
      redirectTo = props.location.redirectTo;
    } else if (props && props.redirectTo) {
      redirectTo = props.redirectTo;
    }

    this.state = {
      redirectTo: redirectTo,
    };
  }

  componentDidMount() {}

  onLoginRedirect = () => {
    this.props.history.push(this.state.redirectTo);
  };

  render() {
    return (
      <Pagecontainer>
        <div className="loginform">
          <div className="loginform__main">
            <FaRegUserCircle />
            <span>ВХОД</span>

            <Signin onSuccessfulLogin={this.onLoginRedirect} />
            <div className="login-bottom-links">
              <Link
                to={{
                  pathname: "/register",
                  redirectTo: this.state.redirectTo,
                }}
              >
                <b>регистрация</b>
              </Link>

              <b>&nbsp;/&nbsp;</b>
              <a href="/todo">
                <i>забравена парола</i>
              </a>
            </div>
          </div>
          <div className="loginform__fg">
            <p>
              ако искате
              <br />
              само да харесате рисунка
              <br />
              може да влезте с:
            </p>

            <a href="#ggl-login" className="login-google">
              <GrGooglePlus /> вход с google
            </a>
            <a href="#fb-login" className="login-facebook">
              <GrFacebookOption /> вход с facebook
            </a>
          </div>
        </div>
      </Pagecontainer>
    );
  }
}

export default Login;
