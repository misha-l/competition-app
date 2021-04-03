import React from "react";
// import axios from "axios";
import api from "../../../api/api";
// import "./Gallery.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class AllByUser extends React.Component {
  state = {
    maxSubmissions: 7,
    submissions: [],
  };

  async componentDidMount() {
    const response = await api.get("/submissions/?byUser=1");
    this.setState({ submissions: response.data });
    console.log("All By User State", this.state);
  }

  render() {
    return (
      <Pagecontainer>
        <br />
        <p>
          Имате публикувани {this.state.submissions.length} рисунки. Можете да
          публикувате още{" "}
          {this.state.maxSubmissions - Number(this.state.submissions.length)}{" "}
          {this.state.maxSubmissions - Number(this.state.submissions.length) ===
          1
            ? "рисунка"
            : "рисунки"}
          .
          <br />
          Ако публикувате повече от {this.state.maxSubmissions} рисунки, само
          първите {this.state.maxSubmissions} ще учавстват в конкурса.
        </p>
        <br />
        <SubmissionList submissions={this.state.submissions} />
        <br />
        <br />
      </Pagecontainer>
    );
  }
}

export default AllByUser;
