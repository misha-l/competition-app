import React from "react";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionListSearchPagination from "../../submissions/SubmissionListSearchPagination/SubmissionListSearchPagination";

class Gallery extends React.Component {
  render() {
    return (
      <Pagecontainer>
        <SubmissionListSearchPagination
          {...this.props}
          displaySearchBar={true}
          displayPagination={true}
        />
      </Pagecontainer>
    );
  }
}

export default Gallery;
