import React from "react";
import axios from "axios";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import "./SubmissionDetails.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";

class SubmissionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionId: this.props.match.params.submissionId,
      submissionData: {},
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:3090/submissions/" + this.state.submissionId
    );
    this.setState({ submissionData: response.data });

    console.log("details", this.state.submissionData);
  }

  render() {
    return (
      <Pagecontainer>
        <div className="drawing-container">
          <div className="drawing-container__main">
            <div>
              <img src={this.state.submissionData.image} alt="Рисунка" />
            </div>
            <div className="drawing-container__main--like-delete">
              <div>
                <i>3</i>
                <b>
                  <HiOutlineHeart />
                </b>
                <a href="/todo">ХАРЕСАЙ</a>
              </div>
              <span>
                <a href="/todo">ИЗТРИЙ</a>
              </span>
            </div>
          </div>
          <div className="drawing-container__info">
            <h2>{this.state.submissionData.authorName}</h2>
            <h3 className="h3red">
              на {this.state.submissionData.authorAge} години
            </h3>
            <h3>
              <IoLocationSharp />
              &nbsp;{this.state.submissionData.authorPlace}
            </h3>
            <p>{this.state.submissionData.description}</p>
            <a href="/todo" className="edit-button">
              РЕДАКТИРАЙ
            </a>
            <a href="/todo" className="share-f">
              СПОДЕЛИ <ImFacebook />
            </a>
          </div>
        </div>
      </Pagecontainer>
    );
  }
}
export default SubmissionDetails;
