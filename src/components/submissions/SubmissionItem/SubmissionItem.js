import React from "react";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";

class SubmissionItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  render() {
    const { _id, authorName, image } = this.props.item;

    return (
      <div className="gallery-item">
        <div className="gallery-item__pic">
          <a href={`/drawing/${_id}`}>
            <img src={image} alt="Рисунка" />
          </a>
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
