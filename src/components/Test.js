import React from "react";
import axios from "axios";

class Test extends React.Component {
  componentDidMount() {
    const response = axios
      .get("http://localhost:3090/submissions/create-fake/")
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    return <div>Test</div>;
  }
}

export default Test;
