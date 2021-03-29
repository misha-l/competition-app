import React from "react";
import api from "../../../api/api";
// import "./Gallery.scss";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class Gallery extends React.Component {
  state = { submissions: [] };

  async componentDidMount() {
    const response = await api.get("/submissions/");
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
