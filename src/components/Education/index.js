import React from "react";

const education = {
  year: "2007-2012",
  title: `Victoria University of Wellington`,
  university: `Bachelor of Engineering, Software Engineering, First Class Honours`,
};

export default function Education() {
  return (
    <div className="educationContent">
      <div className="root">
        <h1>Education</h1>

        <div className="educationContainer">
          <h2 className="content">{education.university}</h2>
          <h3 className="content">{education.title}</h3>
          <em className="content">{education.year}</em>
        </div>
      </div>
    </div>
  );
}
