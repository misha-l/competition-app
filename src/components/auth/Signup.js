import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/Gallery');
    });
  };

  render() {
    const { handleSubmit } = this.props;
        
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="login-form">
        <div className="login-component">
          <label>Имейл:</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </div>
        <div className="login-component">
          <label>Парола:</label>
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
  reduxForm({ form: 'signup' })
)(Signup);
