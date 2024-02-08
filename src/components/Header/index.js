import React from "react";

import arrow from "./image.arrow";

export default function Header() {
  return (
    <div className="root">
      <div className="container">
        <h1>Carson Bruce</h1>

        <em className="onlineView">View at https://carson.kiwi</em>

        <a
          className="downloadButton"
          href="/carson.bruce_cv.pdf"
          target="_blank"
        >
          <amp-img src={arrow} width="20px" height="20px" />
        </a>
      </div>
    </div>
  );
}
