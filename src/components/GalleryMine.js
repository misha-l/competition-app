import React from "react";
import axios from "axios";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionList from "../../submissions/SubmissionList/SubmissionList";

class GalleryMine extends React.Component {
  state = { submissions: [] };

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:3090/submissions/user/123123ssdf24123123"
    );
    this.setState({ submissions: response.data });
  }

  render() {
    return (
      <Pagecontainer>
        <SubmissionList submissions={this.state.submissions} />
      </Pagecontainer>
    );
  }
}

export default GalleryMine;
