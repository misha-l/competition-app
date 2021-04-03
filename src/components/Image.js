import React, { Component } from "react";
import axios from "axios";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

    // this.uploadHandler = this.uploadHandler.bind(this);
  }

  uploadHandler = (event) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    axios.post("http://localhost:3090/submissions/upload", data).then((res) => {
      console.log("UPlodaded-image: ", res.data);
      this.setState({ photos: [res.data, ...this.state.photos] });
    });
  };

  render() {
    return (
      <div>
        <div>
          <input type="file" name="file" onChange={this.uploadHandler} />
        </div>
        {this.state.photos.map((photo) => (
          <img src={`http://localhost:3090/images/${photo.filename}`} />
        ))}
      </div>
    );
  }
}

export default Image;
