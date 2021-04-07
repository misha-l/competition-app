import React from "react";
import api from "../../../api/api";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import "./SubmissionDetails.scss";
import Pagecontainer from "../../layout/Pagecontainer/Pagecontainer";

class SubmissionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionId: this.props.match.params.submissionId,
      submissionData: { likes: [] },
    };
  }

  async componentDidMount() {
    if (this.props.location && this.props.location.submissionData) {
      this.setState({ submissionData: this.props.location.submissionData });
    } else {
      const response = await api.get("/submissions/" + this.state.submissionId);
      this.setState({ submissionData: response.data });
    }
  }

  setSubmissionDataFields(newValues) {
    const newSubmissionData = { ...this.state.submissionData, ...newValues };
    this.setState({ submissionData: newSubmissionData });
  }

  deleteSubmission = async (event) => {
    event.preventDefault();

    const response = await api.delete(
      "/submissions/" + this.state.submissionId
    );

    this.props.history.push("/gallery");
  };

  likeSubmission = async (event) => {
    event.preventDefault();

    const response = await api.post(
      "/submissions/likes/" + this.state.submissionId
    );
    this.setSubmissionDataFields(response.data);
  };

  dislikeSubmission = async (event) => {
    event.preventDefault();

    const response = await api.delete(
      "/submissions/likes/" + this.state.submissionId
    );
    this.setSubmissionDataFields(response.data);
  };

  render() {
    return (
      <Pagecontainer>
        <div className="drawing-container">
          <div className="drawing-container__main">
            <div>
              <img src={this.state.submissionData.image} alt="Рисунка" />
            </div>
            <div className="drawing-container__main--like-delete">
              <div>
                <i>{this.state.submissionData.likes.length}</i>
                <b>
                  {this.state.submissionData.actionsAllowed ? (
                    this.state.submissionData.likedByUser ? (
                      <a
                        href="#dislike"
                        style={{ background: "transparent" }}
                        onClick={this.dislikeSubmission}
                      >
                        <HiHeart />
                      </a>
                    ) : (
                      <a
                        href="#like"
                        style={{ background: "transparent" }}
                        onClick={this.likeSubmission}
                      >
                        <HiOutlineHeart />
                      </a>
                    )
                  ) : (
                    <Link
                      style={{ background: "transparent" }}
                      to={{
                        pathname: "/login",
                        redirectTo: this.props.location.pathname,
                      }}
                    >
                      <HiOutlineHeart />
                    </Link>
                  )}
                </b>
              </div>
              <span>
                {this.state.submissionData.createdByUser ? (
                  <a href="/todo" onClick={this.deleteSubmission}>
                    ИЗТРИЙ
                  </a>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
          <div className="drawing-container__info">
            <h2>{this.state.submissionData.authorName}</h2>
            <h3 className="h3red">
              на {this.state.submissionData.authorAge} години
            </h3>
            <h3>
              <IoLocationSharp />
              &nbsp;{this.state.submissionData.authorPlace}
            </h3>
            <p>{this.state.submissionData.description}</p>

            {this.state.submissionData.createdByUser ? (
              <Link
                to={{
                  pathname: `/edit-drawing/${this.state.submissionId}`,
                  submissionData: this.props.item,
                }}
                className="edit-button"
              >
                РЕДАКТИРАЙ
              </Link>
            ) : (
              ""
            )}

            <a href="/todo" className="share-f">
              СПОДЕЛИ <ImFacebook />
            </a>
          </div>
        </div>
      </Pagecontainer>
    );
  }
}
export default SubmissionDetails;
