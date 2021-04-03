import React from "react";
import "./SubmissionList.scss";

import SubmissionItem from "../SubmissionItem/SubmissionItem";

class SubmissionList extends React.Component {
  render() {
    const items = this.props.submissions.map((item) => {
      return (
        <SubmissionItem
          key={item._id}
          item={item}
          onLikeSubmissionTatko={this.props.onLikeSubmissionDyado}
          onDislikeSubmissionTatko={this.props.onDislikeSubmissionDyado}
        />
      );
    });
    return <div className="gallery">{items}</div>;
  }
}

export default SubmissionList;
