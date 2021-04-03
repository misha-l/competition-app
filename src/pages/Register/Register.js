import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import Pagecontainer from "../../components/layout/Pagecontainer/Pagecontainer";
// import LoginForm from "../../LoginForm/LoginForm";
import Signup from "../../components/auth/Signup";
import { FaRegUserCircle } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";

class Register extends React.Component {
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

  componentDidMount() {
    console.log("Register props: ", this.props);
    console.log("Register state: ", this.state);
  }

  onLoginRedirect = () => {
    console.log("Will redirect to: ", this.state.redirectTo);
    this.props.history.push(this.state.redirectTo);
  };

  render() {
    return (
      <Pagecontainer>
        <div className="loginform">
          <div className="loginform__main">
            <FaRegUserCircle />
            <span>РЕГИСТРАЦИЯ</span>

            <Signup onSuccessfulLogin={this.onLoginRedirect} />
            <div className="login-bottom-links">
              <Link
                to={{
                  pathname: "/login",
                  redirectTo: this.state.redirectTo,
                }}
              >
                {" "}
                <b>вход</b>{" "}
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

export default Register;
