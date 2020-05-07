import React, { Component } from "react";

var arrow = require("./arrow.svg");
var printer = require("./printer.svg");

export default class Header extends Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <h1>Carson Bruce</h1>

          <em className="onlineView">View at carson.kiwi</em>

          <a
            className="downloadButton"
            href="/carson.bruce_cv.pdf"
            target="_blank"
          >
            <amp-img src={arrow} width="20px" height="20px"></amp-img>
          </a>
        </div>
      </div>
    );
  }
}
