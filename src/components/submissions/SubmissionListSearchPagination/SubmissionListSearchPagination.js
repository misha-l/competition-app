import React from "react";
import api from "../../../api/api";
import { connect } from "react-redux";
// import "./Gallery.scss";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class SubmissionListSearchPagination extends React.Component {
  state = {
    allSubmissions: [],
    submissions: [],
    kwd: "",
    itemsPerPage: 6,
    currentPage: 0,
    totalPages: 0,
  };

  async componentDidMount() {
    /* add api interceptor to update results from server based on current authorization header (if user or guest) */
    const authInterceptor = (apiConfig) => {
      apiConfig.headers.authorization = this.props.auth;
      return apiConfig;
    };

    let interceptorUsed = null;
    if (this.props.auth) {
      interceptorUsed = api.interceptors.request.use(authInterceptor);
    }

    const response = await api.get("/submissions/");
    this.setState({ allSubmissions: response.data });
    // console.log("allSubmissions: ", this.state.allSubmissions);
    this.submisstionsToDisplay();

    /* clear api interceptor if used */
    if (interceptorUsed != null)
      api.interceptors.request.eject(interceptorUsed);
  }

  onSearchSubmit = (term) => {
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

      submissions = this.state.allSubmissions
        .sort(function (a, b) {
          return b.likes.length - a.likes.length;
        })
        .slice(0, 8);
    } else if (this.props.ownedbyUserOnly) {
      /* display only user's submissions */

      submissions = this.state.allSubmissions.filter(
        (submission) => submission.createdByUser
      );
    } else {
      /* display all submissions */

      submissions = this.state.allSubmissions;
    }

    /*
    const displayedSubmissions = submissions.length;
    this.setState({ displayedSubmissions: displayedSubmissions });
    */

    if (typeof this.props.updateNumberOfSubmissions == "function") {
      this.props.updateNumberOfSubmissions(submissions.length);
    }

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
      <div>
        {this.props.displaySearchBar ? (
          <SearchBar onSubmit={this.onSearchSubmit} />
        ) : (
          ""
        )}
        <SubmissionList
          submissions={this.state.submissions}
          onLikeSubmission={this.onLikeSubmission}
          onDislikeSubmission={this.onDislikeSubmission}
        />
        {this.props.displayPagination ? (
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            setCurrentPage={this.setCurrentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(SubmissionListSearchPagination);
