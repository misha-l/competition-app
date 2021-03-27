import React from "react";
import "./DrawingSubmit.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import axios from "axios";

/*
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          authorName: this.state.authorName,
        },
      }
    );
*/

class DrawingSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      console.log("Will Submit fields: ", submitFields);
      const response = await axios.post(`http://localhost:3090/submissions/`, {
        ...submitFields,
      });

      this.props.history.push("/drawing/" + response.data._id);
    }
  };

  render() {
    // console.log("DrawingSubmit-state", this.state);
    return (
      <Pagecontainer>
        <div className="drawingSendForm">
          <form onSubmit={this.onFormSubmit}>
            <h1>Изпрати Рисунка</h1>
            <div className="author">
              <label>Име:</label>
              <input
                type="text"
                name="authorName"
                value={this.state.authorName}
                onChange={(e) => this.setState({ authorName: e.target.value })}
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
                value={this.state.authorAge}
                onChange={(e) => this.setState({ authorAge: e.target.value })}
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
                value={this.state.authorPlace}
                onChange={(e) => this.setState({ authorPlace: e.target.value })}
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
            <div className="insertpic">
              <label>Url:</label>
              <input
                type="text"
                name="place"
                value={this.state.image}
                onChange={(e) => this.setState({ image: e.target.value })}
              />
              {this.state.errors.image ? (
                <span className="error">
                  Моля, попълнете адрес на рисунката.
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="description">
              <label>Описание:</label>
              <textarea
                placeholder="Напишете няколко думи, които описват/представят рисунката ви."
                rows={8}
                cols={40}
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              {this.state.errors.description ? (
                <span className="error">
                  Моля, опишете рисунката си с няколко думи.
                </span>
              ) : (
                ""
              )}
            </div>

            <input type="submit" value="Изпрати" className="submmitbutton" />
          </form>
        </div>
      </Pagecontainer>
    );
  }
}

export default DrawingSubmit;
