import React from "react";
import "./SubmissionAdd.scss";
import Pagecontainer from "../../layout/Pagecontainer/Pagecontainer";
// import axios from "axios";
import api from "../../../api/api";
import { config } from "../../../config";
import requireAuth from "../../auth/requireAuth";
class DrawingSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesDomain: process.env.API_URI
        ? process.env.API_URI
        : config.url.API_URL,
      fieldList: [
        "authorName",
        "authorAge",
        "authorPlace",
        "image",
        "description",
      ],
      errors: {},
    };
    for (const fieldName of this.state.fieldList) {
      this.state[fieldName] = "";
    }
  }

  validateInput = () => {
    let errors = {};
    let errorsFound = false;
    for (const fieldName of this.state.fieldList) {
      if (!this.state[fieldName]) {
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
        submitFields[fieldName] = this.state[fieldName];
      }
      // console.log("Will Submit fields: ", submitFields);
      const response = await api.post(`/submissions/`, {
        ...submitFields,
      });

      this.props.history.push("/drawing/" + response.data._id);
    }
  };

  OnFileUpload = (event) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    api.post("/submissions/upload", data).then((res) => {
      this.setState({
        image: this.state.imagesDomain + "/images/" + res.data.filename,
      });
    });
  };

  render() {
    // console.log("DrawingSubmit-state", this.state);
    return (
      <Pagecontainer>
        <div className="drawingSendForm">
          <form onSubmit={this.onFormSubmit}>
            <h1>?????????????? ??????????????</h1>
            <div className="author">
              <label>??????:</label>
              <input
                type="text"
                name="authorName"
                value={this.state.authorName}
                onChange={(e) => this.setState({ authorName: e.target.value })}
              />
              {this.state.errors.authorName ? (
                <span className="error">????????, ?????????????????? ?????? ???? ????????????.</span>
              ) : (
                ""
              )}
            </div>
            <div className="age">
              <label>????????????:</label>

              <input
                type="text"
                name="age"
                value={this.state.authorAge}
                onChange={(e) => this.setState({ authorAge: e.target.value })}
              />
              {this.state.errors.authorAge ? (
                <span className="error">????????, ?????????????????? ???????????? ???? ????????????.</span>
              ) : (
                ""
              )}
            </div>
            <div className="place">
              <label>???????????????? ??????????:</label>
              <input
                type="text"
                name="place"
                value={this.state.authorPlace}
                onChange={(e) => this.setState({ authorPlace: e.target.value })}
              />
              {this.state.errors.authorPlace ? (
                <span className="error">
                  ????????, ?????????????????? ???????????????? ?????????? ???? ????????????.
                </span>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="insertpic">
              <label>??????????????:</label>
              <input type="file" name="file" onChange={this.OnFileUpload} />
              <input
                type="hidden"
                name="image"
                value={this.state.image}
                readOnly
              />
              {this.state.errors.image ? (
                <span className="error">
                  ????????, ?????????????????? ?????????? ???? ??????????????????.
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="description">
              <label>????????????????:</label>
              <textarea
                placeholder="???????????????? ?????????????? ????????, ?????????? ??????????????/???????????????????? ?????????????????? ????."
                rows={8}
                cols={40}
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              {this.state.errors.description ? (
                <span className="error">
                  ????????, ?????????????? ?????????????????? ???? ?? ?????????????? ????????.
                </span>
              ) : (
                ""
              )}
            </div>

            <input type="submit" value="??????????????" className="submmitbutton" />
          </form>
        </div>
      </Pagecontainer>
    );
  }
}

export default requireAuth(DrawingSubmit);
