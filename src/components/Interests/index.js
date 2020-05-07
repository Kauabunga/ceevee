import React, { Component } from "react";

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

export default class Interests extends Component {
  render() {
    return (
      <div className="interestsContainer">
        <div className="root">
          <h1>Interests</h1>
          <ul className="chipList">
            {interests.map((interest, i) => {
              return (
                <li key={i} className="chip">
                  {interest.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
