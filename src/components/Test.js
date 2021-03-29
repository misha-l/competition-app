import React from "react";
import axios from "axios";
import api from "../api/api";

// const response = await axios.get("http://localhost:3090/submissions/");

class Test extends React.Component {
  componentDidMount() {
    const response = api.get("/submissions/create-fake/").then((response) => {
      console.log("Test-response-new", response);
    });
  }

  render() {
    return <div>Test</div>;
  }
}

export default Test;
