import React from "react";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import SubmissionListSearchPagination from "../../submissions/SubmissionListSearchPagination/SubmissionListSearchPagination";

class Profile extends React.Component {
  state = {
    maxSubmissions: 6,
    alreadySubmitted: 0,
  };

  updateNumberOfSubmissions = (submissionsNumber) => {
    this.setState({ alreadySubmitted: submissionsNumber });
  };

  render() {
    return (
      <Pagecontainer>
        <p>
          Имате публикувани {this.state.alreadySubmitted} рисунки. Можете да
          публикувате още{" "}
          {this.state.maxSubmissions - this.state.alreadySubmitted}{" "}
          {this.state.maxSubmissions - this.state.alreadySubmitted === 1
            ? "рисунка"
            : "рисунки"}
          .
          <br />
          Ако публикувате повече от {this.state.maxSubmissions} рисунки, само
          първите {this.state.maxSubmissions} ще учавстват в конкурса.
        </p>
        <SubmissionListSearchPagination
          ownedbyUserOnly={true}
          updateNumberOfSubmissions={this.updateNumberOfSubmissions}
        />
      </Pagecontainer>
    );
  }
}

export default Profile;
