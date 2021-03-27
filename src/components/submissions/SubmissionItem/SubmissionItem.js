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
    const {
      _id,
      authorName,
      authorAge,
      authorPlace,
      image,
      description,
      likes,
    } = this.props.item;

    return (
      <div className="gallery-item">
        <div className="gallery-item__pic">
          <Link
            to={{
              pathname: `/drawing/${_id}`,
              submissionData: {
                authorName,
                authorAge,
                authorPlace,
                image,
                description,
                likes,
              },
            }}
          >
            <img src={image} alt="Рисунка" />
          </Link>
        </div>
        <div className="gallery-item__info">
          <div className="gallery-item__info-author">
            <a href="/drawingpage">{authorName}</a>
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
