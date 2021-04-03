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
    console.log("Gallery-finalistsOnly: ", this.props.finalistsOnly);
    console.log("Gallery was mounted - load via API");
    const response = await api.get("/submissions/");
    console.log("allSubmissions: ", response.data);
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
    /* determine which submisstions to display based on state */

    let submissions = [];
    if (this.state.kwd !== "") {
      /* filter by kwd */

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
    } else if (this.props.finalistsOnly) {
      /* filter finalists based on likes */
    } else if (this.props.ownedbyUserOnly) {
      /* show only user's submissions */
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
    this.setState({ currentPage }, () => {
      this.submisstionsToDisplay();
    });
  };

  onLikeSubmission = (likesData) => {
    console.log("Received-in-Gallery: ", likesData);
    this.setSubmissionFields(likesData);
  };

  onDislikeSubmission = (dislikesData) => {
    this.setSubmissionFields(dislikesData);
  };

  setSubmissionFields(newValues) {
    const newSubmissions = this.state.allSubmissions.map((submission) =>
      submission._id === newValues._id
        ? { ...submission, ...newValues }
        : submission
    );

    this.setState({ allSubmissions: newSubmissions }, () => {
      this.submisstionsToDisplay();
    });
  }

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
        <SubmissionList
          submissions={this.state.submissions}
          onLikeSubmission={this.onLikeSubmission}
          onDislikeSubmission={this.onDislikeSubmission}
        />
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
