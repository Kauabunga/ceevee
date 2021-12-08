import React from "react";

const text = `
I plan and deliver throughout the entire software development process, from when a project is imagined to its release. 

I've worked on a number of large projects, demonstrating my experience through a range of roles.

`;

const text2 = `

  My key attributes include: problem solving, passion to learn and share, open mindedness, and being a team player.

`;

const text3 = `

  I am at home when working with and sharing JavaScript along with all the technologies and processes it enables.

`;

export default function Introduction() {
  return (
    <div className="root">
      <div className="firstSentence">
        <b className="blue">
          I am passionate about creating simple and beautiful&nbsp;apps.
        </b>
      </div>

      <div className="content">{text}</div>
      <div className="content">{text2}</div>
      <div className="content">{text3}</div>
      <div className="content">
        Get in touch at
        <a href="mailto:hello@carson.kiwi" className="introLink">
          <b className="blue">&nbsp;hello@carson.kiwi</b>
        </a>
      </div>
      <div style={{ display: "block", height: 72 }} />
    </div>
  );
}
