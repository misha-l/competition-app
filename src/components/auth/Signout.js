import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import api from "../../api/api";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
    this.props.history.push("/");

    for (let i = 0; i < 10; i++) api.interceptors.request.eject(i);
    api.interceptors.request.use(
      (config) => {
        delete config.headers.authorization;
        return config;
      },
      null,
      { synchronous: true }
    );
    // delete api.defaults.headers.common['authorization'];
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

export default connect(null, actions)(Signout);
