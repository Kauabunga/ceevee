import React from "react";

import formatDistanceStrict from "date-fns/formatDistanceStrict";

import Text from "../Text";

const years = formatDistanceStrict(new Date("2012-08-01"), new Date(), {
  unit: "year",
  roundingMethod: "ceil",
});

const text = `
I plan and deliver throughout the entire software development process, from when a project is imagined to its release. 

For the past ${years}, I've worked on a number of large solutions, demonstrating my experience through a range of roles.

`;

const text2 = `

  My key attributes include: problem solving, passion to learn and share, open mindedness, listening, and being a team player.

`;

const text3 = `

  I am at home when working with and sharing JavaScript along with all the technologies and processes it enables.

`;

export default function Introduction() {
  return (
    <div className="root">
      <div className="firstSentence">
        <b className="blue">
          <Text>I am passionate about creating simple beautiful apps.</Text>
        </b>
      </div>

      <div className="content">
        <Text>{text}</Text>
      </div>
      <div className="content">
        <Text>{text2}</Text>
      </div>
      <div className="content">
        <Text>{text3}</Text>
      </div>
      <div className="content">
        Get in touch at&nbsp;
        <a href="mailto:hello@carson.kiwi" className="introLink">
          <b className="blue">hello@carson.kiwi</b>
        </a>
        <b className="blue introLinkPrint">hello@carson.kiwi</b>
      </div>
      <div style={{ display: "block", height: 72 }} />
    </div>
  );
}
