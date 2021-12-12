import React from "react";

const interests = [
  {
    title: "Javascript",
    isDisabled: true,
  },
  {
    title: "Netball",
    isDisabled: false,
  },
  {
    title: "Running",
    isDisabled: false,
  },
  {
    title: "Cycling",
    isDisabled: false,
  },
  {
    title: "Photography",
    isDisabled: false,
  },
  {
    title: "Gaming",
    isDisabled: false,
  },
  {
    title: "Sound systems",
    isDisabled: true,
  },
  {
    title: "Beer brewing",
    isDisabled: true,
  },
  {
    title: "Stenciling",
    isDisabled: true,
  },
];

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
