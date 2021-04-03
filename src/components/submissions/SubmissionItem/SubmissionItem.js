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
    console.log("response-like", response.data);
    this.props.onLikeSubmissionTatko(response.data);
  };

  dislikeSubmission = async (event) => {
    event.preventDefault();
    const response = await api.delete(
      "/submissions/likes/" + this.props.item._id
    );
    console.log("response-dislike", response.data);
    this.props.onDislikeSubmissionTatko(response.data);
  };

  render() {
    console.log("Submission-item-props: ", this.props.item);

    const {
      _id,
      authorName,
      authorAge,
      authorPlace,
      image,
      description,
      likes,
      createdByUser,
      likedByUser,
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
            </Link>
          </div>
          <div className="gallery-item__info-likes">
            <span>
              <i>{likes.length}</i>
              <b>
                {likedByUser ? (
                  <a
                    style={{ background: "transparent" }}
                    onClick={this.dislikeSubmission}
                  >
                    <HiHeart />
                  </a>
                ) : (
                  <a
                    style={{ background: "transparent" }}
                    onClick={this.likeSubmission}
                  >
                    <HiOutlineHeart />
                  </a>
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
