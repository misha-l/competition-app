import React from "react";
import api from "../../../api/api";
// import "./Gallery.scss";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class Gallery extends React.Component {
  state = {
    allSubmissions: [],
    submissions: [],
    kwd: "",
    itemsPerPage: 6,
    currentPage: 0,
    totalPages: 0,
  };

  async componentDidMount() {
    const response = await api.get("/submissions/");
    this.setState({ allSubmissions: response.data });
    this.submisstionsToDisplay();
  }

  onSearchSubmit = (term) => {
    console.log("term", term);

    this.setState({ kwd: term }, () => {
      this.submisstionsToDisplay();
    });
  };

  submisstionsToDisplay = () => {
    /* determine which submisstions to display */

    let submissions = [];
    if (this.state.kwd !== "") {
      /* filter by kwd */

      /*
      this.state.allSubmissions.forEach((element) => {
        
        if (
          element["authorName"]
            .toLowerCase()
            .includes(this.state.kwd.toLowerCase()) ||
          element["description"]
            .toLowerCase()
            .includes(this.state.kwd.toLowerCase())
        ) {
          submissions.push(element);
        }
       });
        */
      submissions = this.state.allSubmissions.filter((element) => {
        return element["authorName"]
          .toLowerCase()
          .includes(this.state.kwd.toLowerCase()) ||
          element["description"]
            .toLowerCase()
            .includes(this.state.kwd.toLowerCase())
          ? element
          : false;
      });
    } else {
      submissions = this.state.allSubmissions;
    }

    /*
    const displayedSubmissions = submissions.length;
    this.setState({ displayedSubmissions: displayedSubmissions });
    */

    const totalPages = Math.ceil(submissions.length / this.state.itemsPerPage);
    this.setState({ totalPages: totalPages });

    /* pagination */

    submissions = submissions.slice(
      this.state.currentPage * this.state.itemsPerPage,
      (this.state.currentPage + 1) * this.state.itemsPerPage
    );

    this.setState({ submissions: submissions });
  };

  setCurrentPage = (currentPage) => {
    console.log("New current page is: ", currentPage);
    this.setState({ currentPage }, () => {
      this.submisstionsToDisplay();
    });
  };

  render() {
    return (
      <Pagecontainer>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        <br />
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          setCurrentPage={this.setCurrentPage}
        />
        <br />
        <SubmissionList submissions={this.state.submissions} />
        <br />
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          setCurrentPage={this.setCurrentPage}
        />
        <br />
      </Pagecontainer>
    );
  }
}

export default Gallery;
