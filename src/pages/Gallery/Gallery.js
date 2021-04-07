import React from "react";
import Pagecontainer from "../../components/layout/Pagecontainer/Pagecontainer";
import SubmissionListSearchPagination from "../../components/submissions/SubmissionListSearchPagination/SubmissionListSearchPagination";

class Gallery extends React.Component {
  render() {
    // console.log("Gallery-props: ", this.props);
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
