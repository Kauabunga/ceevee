import React from "react";

import githubLogo from "./image.github";
import linkedInLogo from "./image.linkedin";

export default function Footer() {
  return (
    <div className="root">
      <div className="container">
        <div className="emailContainer">
          <span className="text">
            <b className="email">hello@carson.kiwi</b>
          </span>
        </div>

        <div className="socialLinkPrint">github.com/Kauabunga</div>
        <div className="socialLinkPrint">nz.linkedin.com/in/carsonbruce</div>

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
}
