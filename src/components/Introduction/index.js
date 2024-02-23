import React from "react";

import formatDistanceStrict from "date-fns/formatDistanceStrict";

import Text from "../Text";

const years = formatDistanceStrict(new Date("2012-08-01"), new Date(), {
  unit: "year",
  roundingMethod: "ceil",
});

const intro = `
  
  I am a seasoned software engineer with ${years} of experience, passionate about creating beautifully simple applications.
  
`;

const texts = [
  `

  Throughout my career, I have successfully navigated the entire software development lifecycle, from conceptualization to deployment.

  `,
  `

  My diverse roles have equipped me with valuable problem-solving skills and a passion for continuous learning and collaboration. 
  
  I excel in JavaScript development, leveraging its capabilities to explore new technologies and processes.

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
          <Text>{intro}</Text>
        </b>
      </div>

      {texts.map((text) => (
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

      <div className="contentBlock" />
    </div>
  );
}
