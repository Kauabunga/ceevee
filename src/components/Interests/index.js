import React from "react";

const interests = [
  {
    title: "Javascript",
  },
  {
    title: "User experience",
  },
  {
    title: "Netball",
  },
  {
    title: "Running",
  },
  {
    title: "Cycling",
  },
  {
    title: "Photography",
  },
  {
    title: "Gaming",
  },
  {
    title: "Sound systems",
  },
  {
    title: "Beer brewing",
  },
  {
    title: "Stenciling",
  },
];

export default () => {
  return (
    <div className="interestsContainer">
      <div className="root">
        <h1>Interests</h1>
        <ul className="chipList">
          {interests.map((interest) => {
            return (
              <li key={interest.title} className="chip">
                {interest.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
