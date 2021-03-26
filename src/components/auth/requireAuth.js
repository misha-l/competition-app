import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    
    constructor(props) {
      super(props);

      /* where to redirect after succesful login */
      let redirectTo = '/';
      if (props && props.redirectTo) {
        redirectTo = props.redirectTo;
      } else if (props && props.location && props.location.pathname) {
        redirectTo = props.location.pathname;
      }

      this.state = {
        redirectTo : redirectTo
      };
    }
    
    // Our component just got rendered
    componentDidMount() {
      console.log("requireAuth-props", this.props);
      console.log("requireAuth-state", this.state);
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push({
          pathname: '/Login',
          redirectTo: this.state.redirectTo
        });
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
