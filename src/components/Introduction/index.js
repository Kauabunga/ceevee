import React from "react";

import formatDistanceStrict from "date-fns/formatDistanceStrict";

import Text from "../Text";

const years = formatDistanceStrict(new Date("2012-08-01"), new Date(), {
  unit: "year",
  roundingMethod: "ceil",
});

const intro = "I am passionate about creating simple beautiful apps.";

const texts = [
  `
I plan and deliver throughout the entire software development lifecycle, from when a project is imagined to its release. 

For the past ${years}, I've worked on a number of large solutions, demonstrating my experience through a range of roles.

`,
  `

  My key attributes include: problem solving, passion to learn and share, open mindedness, listening, and being a team player.

`,
  `

  I am at home when working with and sharing JavaScript along with all the technologies and processes it enables.

`,
];

const introRewrite = `
  
  I am a seasoned software developer with ${years} of experience, passionate about creating simple beautiful applications.
  
`;

const textsRewrite = [
  `

  Throughout my career, I have successfully navigated the entire software development lifecycle, from conceptualization to deployment.

  `,
  `

  My diverse roles have equipped me with valuable problem-solving skills and a passion for continuous learning and collaboration. 
  
  I excel in JavaScript development, leveraging its capabilities and exploring new technologies and processes.

  `,
  `

  Known for my open-minded approach, attentive listening, and strong teamwork ethic, I am committed to driving innovation and exceeding expectations in every project I undertake.

  `,
];

export default function Introduction() {
  return (
    <div className="root">
      <div className="firstSentence">
        <b className="blue">
          <Text>{introRewrite}</Text>
        </b>
      </div>

      {textsRewrite.map((text) => (
        <div key={text} className="content">
          <Text>{text}</Text>
        </div>
      ))}

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
