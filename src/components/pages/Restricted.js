import React, { Component } from "react";
import requireAuth from "../auth/requireAuth";

class Restricted extends Component {
  render() {
    return <div>This is restricted feature!</div>;
  }
}

export default requireAuth(Restricted);
