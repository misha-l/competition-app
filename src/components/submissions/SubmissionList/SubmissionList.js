import React from "react";
import "./SubmissionList.scss";

import SubmissionItem from "../SubmissionItem/SubmissionItem";

const SubmissionList = (props) => {
  const items = props.submissions.map((item) => {
    return <SubmissionItem key={item._id} item={item} />;
  });
  return <div className="gallery">{items}</div>;
};

export default SubmissionList;
