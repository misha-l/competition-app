import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      if (this.props.onSuccessfulLogin) {
        this.props.onSuccessfulLogin();
      } else if (this.props && this.props.history) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="login-form">
        <div className="login-component">
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </div>
        <div className="login-component">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </div>
        <div>{this.props.errorMessage}</div>
        <button>Регистрация</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
