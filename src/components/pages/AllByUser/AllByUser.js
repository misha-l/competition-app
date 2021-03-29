import React from "react";
// import axios from "axios";
import api from "../../../api/api";
// import "./Gallery.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class AllByUser extends React.Component {
  state = { submissions: [] };

  async componentDidMount() {
    const response = await api.get("/submissions/?byUser=1");
    this.setState({ submissions: response.data });
    console.log("All By User State", this.state);
  }

  render() {
    return (
      <Pagecontainer>
        <br />
        <br />
        <SubmissionList submissions={this.state.submissions} />
        <br />
        <br />
      </Pagecontainer>
    );
  }
}

export default AllByUser;
