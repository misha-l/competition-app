import React from "react";
import axios from "axios";
// import "./Gallery.scss";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class Gallery extends React.Component {
  // за SubmissionDetails:

  /*
  state = { submission: {} };

  async componentDidMount() {
    console.log("SubmissionDetails-props", this.props);
    const response = await axios.get(
      "http://localhost:3090/submissions/" + this.props.submissionId
    );
    this.setState({ submission: response.data });
    console.log("SubmissionDetails-state", this.state);
  }
  */

  // за Gallery

  state = { submissions: [] };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3090/submissions/");
    this.setState({ submissions: response.data });
  }

  render() {
    return (
      <Pagecontainer>
        <SearchBar />
        <br />
        <br />
        <Pagination />
        <br />
        <SubmissionList submissions={this.state.submissions} />
        <br />
        <Pagination />
        <br />
      </Pagecontainer>
    );
  }
}

export default Gallery;
