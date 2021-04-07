import React from "react";
//import "./DrawingSubmit.scss";
import Pagecontainer from "../../layout/Pagecontainer/Pagecontainer";
// import axios from "axios";
import api from "../../../api/api";
import requireAuth from "../../auth/requireAuth";

class DrawingEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionId: this.props.match.params.submissionId,
      fieldList: ["authorName", "authorAge", "authorPlace", "description"],
      submissionData: [],
      errors: {},
    };
    for (const fieldName of this.state.fieldList) {
      this.state.submissionData[fieldName] = "";
    }
  }

  async componentDidMount() {
    if (this.props.location && this.props.location.submissionData) {
      console.log(
        "We get submissionData as props",
        this.props.location.submissionData
      );
      this.setState({ submissionData: this.props.location.submissionData });
    } else {
      const response = await api.get("/submissions/" + this.state.submissionId);
      console.log("We fetch submissionData via API", response.data);
      this.setState({ submissionData: response.data });
    }
  }

  validateInput = () => {
    let errors = {};
    let errorsFound = false;
    for (const fieldName of this.state.fieldList) {
      if (!this.state.submissionData[fieldName]) {
        errors[fieldName] = true;
        errorsFound = true;
      }
    }
    this.setState({ errors: errors });
    return errorsFound;
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const errorsFound = this.validateInput();

    if (!errorsFound) {
      let submitFields = {};
      for (const fieldName of this.state.fieldList) {
        submitFields[fieldName] = this.state.submissionData[fieldName];
      }
      console.log("Will Submit fields: ", submitFields);
      const response = await api.patch(
        "/submissions/" + this.state.submissionId,
        {
          ...submitFields,
        }
      );

      this.props.history.push("/drawing/" + response.data._id);
    }
  };

  setSubmissionDataFields(newValues) {
    const newSubmissionData = { ...this.state.submissionData, ...newValues };
    this.setState({ submissionData: newSubmissionData });
  }

  render() {
    // console.log("DrawingSubmit-state", this.state);
    return (
      <Pagecontainer>
        <div className="drawingSendForm">
          <form onSubmit={this.onFormSubmit}>
            <h1>Редактирай Детайли</h1>
            <div className="author">
              <label>Име:</label>
              <input
                type="text"
                name="authorName"
                value={this.state.submissionData.authorName}
                onChange={(e) =>
                  this.setSubmissionDataFields({ authorName: e.target.value })
                }
              />
              {this.state.errors.authorName ? (
                <span className="error">Моля, попълнете име.</span>
              ) : (
                ""
              )}
            </div>
            <div className="age">
              <label>Години:</label>

              <input
                type="text"
                name="age"
                value={this.state.submissionData.authorAge}
                onChange={(e) =>
                  this.setSubmissionDataFields({ authorAge: e.target.value })
                }
              />
              {this.state.errors.authorAge ? (
                <span className="error">Моля, попълнете име на автора.</span>
              ) : (
                ""
              )}
            </div>
            <div className="place">
              <label>Населено място:</label>
              <input
                type="text"
                name="place"
                value={this.state.submissionData.authorPlace}
                onChange={(e) =>
                  this.setSubmissionDataFields({ authorPlace: e.target.value })
                }
              />
              {this.state.errors.authorPlace ? (
                <span className="error">
                  Моля, попълнете населено място на автора.
                </span>
              ) : (
                ""
              )}
            </div>
            <br />

            <div className="description">
              <label>Описание:</label>
              <textarea
                placeholder="Напишете няколко думи, които описват/представят рисунката ви."
                rows={8}
                cols={40}
                value={this.state.submissionData.description}
                onChange={(e) =>
                  this.setSubmissionDataFields({ description: e.target.value })
                }
              />
              {this.state.errors.description ? (
                <span className="error">
                  Моля, опишете рисунката си с няколко думи.
                </span>
              ) : (
                ""
              )}
            </div>

            <input type="submit" value="Запази" className="submmitbutton" />
          </form>
        </div>
      </Pagecontainer>
    );
  }
}

// export default DrawingEdit;
export default requireAuth(DrawingEdit);
