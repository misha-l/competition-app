import React from "react";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import api from "../../../api/api";

class SubmissionItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  likeSubmission = async (event) => {
    event.preventDefault();

    const response = await api.post(
      "/submissions/likes/" + this.props.item._id
    );
    this.props.onLikeSubmission(response.data);
  };

  dislikeSubmission = async (event) => {
    event.preventDefault();
    const response = await api.delete(
      "/submissions/likes/" + this.props.item._id
    );
    this.props.onDislikeSubmission(response.data);
  };

  render() {
    const {
      _id,
      authorName,
      image,
      likes,
      createdByUser,
      likedByUser,
      actionsAllowed,
    } = this.props.item;

    //            {createdByUser ? " mine " : ""}
    //            {likedByUser ? " liked " : ""}

    return (
      <div className="gallery-item">
        <div className="gallery-item__pic">
          <Link
            to={{
              pathname: `/drawing/${_id}`,
              submissionData: this.props.item,
            }}
          >
            <img src={image} alt="Рисунка" />
          </Link>
        </div>
        <div className="gallery-item__info">
          <div className="gallery-item__info-author">
            <Link
              to={{
                pathname: `/drawing/${_id}`,
                submissionData: this.props.item,
              }}
            >
              {authorName}
              {actionsAllowed ? " user " : " guest "}
            </Link>
          </div>
          <div className="gallery-item__info-likes">
            <span>
              <i>{likes.length}</i>
              <b>
                {actionsAllowed ? (
                  likedByUser ? (
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
                    to={{
                      pathname: "/login",
                    }}
                  >
                    <HiOutlineHeart />
                  </Link>
                )}
              </b>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionItem;
