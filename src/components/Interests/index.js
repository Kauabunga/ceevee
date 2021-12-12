import React from "react";

import { interests } from "../../content";

export default function Interests() {
  return (
    <div className="interestsContainer">
      <div className="root">
        <h1>Interests</h1>
        <ul className="chipList">
          {interests
            .filter((interest) => !interest.isDisabled)
            .map((interest) => (
              <li key={interest.title} className="chip">
                {interest.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
