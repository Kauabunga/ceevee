import React, { Component } from "react";

const text = ``;

export default class Footer extends Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <div>
            <span className="text">{text}</span>
            <span className="text">
              <b>hello@carson.kiwi</b>
            </span>
          </div>

          <div className="socialLinkPrint">
            GitHub https://github.com/Kauabunga
          </div>
          <div className="socialLinkPrint">
            Linkedin https://nz.linkedin.com/in/carsonbruce
          </div>

          <a
            href="https://github.com/Kauabunga"
            target="_blank"
            className="socialLink"
          >
            <amp-img src={require("./github.svg")} height="40px" width="40px" />
          </a>
          <a
            href="https://nz.linkedin.com/in/carsonbruce"
            target="_blank"
            className="socialLink"
          >
            <amp-img
              src={require("./linkedin.svg")}
              height="40px"
              width="40px"
            />
          </a>
        </div>
      </div>
    );
  }
}
