import React from "react";
import Pagecontainer from "../../components/layout/Pagecontainer/Pagecontainer";
import SubmissionListSearchPagination from "../../components/submissions/SubmissionListSearchPagination/SubmissionListSearchPagination";

class Gallery extends React.Component {
  render() {
    return (
      <Pagecontainer>
        <SubmissionListSearchPagination
          finalistsOnly={true}
          displayPagination={true}
        />
      </Pagecontainer>
    );
  }
}

export default Gallery;
