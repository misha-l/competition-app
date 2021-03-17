import React, { Component } from "react";
import "./Demo.scss";

class Demo extends Component {
  render() {
    return (
      <div class="demo">
        <h1>Header in Demo</h1>
        <ul class="navbar">
          <li>
            <a href="/">
              Item <span>1</span>
            </a>
          </li>
          <li>
            <a href="/">
              Item <span>2</span>
            </a>
          </li>
          <li>
            <a href="/">
              Item <span>3</span>
            </a>
          </li>
          <li>
            <a href="/">
              Item <span>4</span>
            </a>
          </li>
          <li>
            <a href="/">
              Item <span>5</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Demo;
