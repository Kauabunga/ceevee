import React from "react";

const properlyLogo = require("./properly.svg");
const solnetLogo = require("./solnet.svg");
const victoriaLogo = require("./vuw.png");
const middlewareLogo = require("./mwnz.png");

const jobs = [
  {
    title: "Middleware NZ",
    date: "Mar 2019 - Now",
    brief: `
    
    I started Middleware NZ as an API developer and have been learning lots. 



    `,
    svg: {
      src: middlewareLogo,
      height: "132px",
      width: "135px",

      style: {
        width: 52,
        float: "right",
        padding: 4,
        backgroundColor: "#282940",
      },
    },
  },
  {
    title: "Properly",
    date: "Nov 2017 - Mar 2019",
    brief: `
    
    I joined Properly with a team of 14, working across the world to provide tools and people
    to property owners and managers.

    After achieving our Series-A funding I became the lead for the frontend team, together owning the multiple web apps of Properly.

    Beyond this role, I was involved with more of our engineering, design, and test team activities. This included:
    Web/Service implementation design, Full stack development, UX design, UI test automation, CI pipelines, Infrastructure design, and Infrastructure as code.

    `,
    svg: {
      src: properlyLogo,
      height: "2215px",
      width: "770px",
    },
  },
  {
    title: "Solnet",
    date: "Aug 2012 - Nov 2017 ( 5 years 3 months )",
    brief: `
    
    I started with Solnet after graduating, joining the delivery team.

    I gained experience with a variety of clients, first as a front end developer, then as others:
     Devops developer, API developer, Automation tester, and UX designer.

    Later at my time in Solnet I mentored team members in Javascript 
    tooling and practices, through 1-on-1's and group presentations.

    `,
    link: `See the Projects section and some of the work I've done with Solnet.`,
    linkHref: "#Projects",
    svg: {
      src: solnetLogo,
      height: "2215px",
      width: "770px",
    },
  },
  {
    title: "Research Project: Query Expansion",
    date: "Nov 2011 - March 2012 ( 4 months )",
    brief: `

    My second research opportunity was offered by the supervisor of my honours project.
    
    The project looked at ways that Wikipedia and its hyperlinks could be used to support 
    Query Expansion.  
    
    With Victoria's Web Intelligence team, I managed to get the my thesis submitted and accepted to an 
    Australasian Web Intelligence conference.

    `,
    svg: {
      src: victoriaLogo,
      height: "792px",
      width: "192px",
    },
  },
  {
    title: "Research Project: Eye Gaze tracking",
    date: "Nov 2010 - March 2011 ( 4 months )",
    brief: `
    At the end of my 300 level university year I was awarded a research scholarship.
    
    With the support of my supervisor and his team,
    I contributed to the development of an open source gaze tracking system.

    `,
    svg: {
      src: victoriaLogo,
      height: "792px",
      width: "192px",
    },
  },
  {
    title: "Cool Bananas",
    date: "Nov 2009 - March 2010 ( 4 months )",
    brief: `

    During an internship with another student and senior
     our team prototyped a scripting interpreter and runtime for embedded systems.
     
    The experience helped cement the past year study learning C, Agile processes, and Testing practices.
    
    `,
  },
];

export default () => {
  return (
    <div className="root">
      <h1 id="Experience" className="experienceTitle">
        Experience
      </h1>

      {jobs.map((job, i) => {
        return (
          <div
            key={job.title}
            className={i !== jobs.length - 1 ? "job" : "lastJob"}
          >
            <div className="jobContentContainer">
              <div className="jobContent">
                <div className="titleContainer">
                  <h2 className="jobTitle">{job.title}</h2>
                  <em>{job.date}</em>
                </div>

                {job.svg ? (
                  <div className="jobImage">
                    <amp-img
                      style={job.svg.style}
                      src={job.svg.src}
                      height={job.svg.height}
                      width={job.svg.width}
                      layout="responsive"
                    />
                  </div>
                ) : null}

                <p className="jobBrief">{job.brief}</p>

                {job.link ? (
                  <a className="jobLink" href={job.linkHref}>
                    <strong>{job.link}</strong>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
