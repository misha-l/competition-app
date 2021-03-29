import React from "react";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";

class SubmissionItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

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
            <a href="/drawingpage">{authorName}</a>
            {createdByUser ? " mine " : ""}
            {likedByUser ? " liked " : ""}
          </div>
          <div className="gallery-item__info-likes">
            <a href="/todo">
              <i>3</i>
              <b>
                <HiOutlineHeart />
              </b>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionItem;
