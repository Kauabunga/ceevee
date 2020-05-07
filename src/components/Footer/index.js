import React from "react";

const text = ``;
const githubLogo = require("./github.svg");
const linkedInLogo = require("./linkedin.svg");

export default () => {
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
          rel="noopener noreferrer"
          className="socialLink"
        >
          <amp-img src={githubLogo} height="40px" width="40px" />
        </a>
        <a
          href="https://nz.linkedin.com/in/carsonbruce"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <amp-img src={linkedInLogo} height="40px" width="40px" />
        </a>
      </div>
    </div>
  );
};
