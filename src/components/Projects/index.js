import React, { Component } from "react";

const projects = [
  {
    title: "Properly",
    client: "Properly",
    isDisabled: true,
    brief: `


    `,
    bullets: [],
  },
  {
    title: "Lending and Onboarding",
    client: "BNZ",
    isDisabled: false,
    brief: `

      I joined a product team at BNZ to help transform their Lending and Onboarding systems, aiming to improve the experience
      for customers and bank users. This transformation was supported by a new way of delivery, promoting more modular systems
      design and implementation with supporting platforms and dev-ops processes.

      I shared the lead for the Front-end implementation of two major applications and a component library.

    `,
    bullets: [
      "Lead app development seeing Angular 2 through its beta releases.",
      "Promoted and adapted a UI component library for multiple applications.",
      "Guided Front-end developers through best practices, process and tooling.",
      "Guided UI Integration testers through best practices, process and tooling.",
    ],
  },
  {
    title: "Employment Agreement Builder",
    client: "Ministry of Business and Innovation and Employment",
    brief: `

      EAB is an application for small to medium businesses to create new Employment agreements while learning
      about employment law with easy-to-digest content.
        
      EAB exceeded its objectives and was built, tested, and delivered in three months.

    `,
    bullets: [
      "Practiced BDD and TDD creating a suite of feature-complete integration and unit tests.",
      "Created a reusable forms solution, reused for a second MBIE Policy Builder app.",
      "Promoted a full stack Javascript solution supported by docker.",
      "Implemented Node.js micro service handling 10x expected load.",
      "Implemented a CI pipeline that performed automated testing and releasing dozenes of times a day.",
    ],
  },
  {
    title: "Online Banking",
    client: "Westpac",
    brief: `

      I was part of a Westpac team with a goal to better their online banking experience.

      I helped keep the developers of the project, mediating communications between development teams.
      I improved automation in local, development, and test environments helping developers become more autonomous.

      After two months my role extended to a technical lead of a team of five, responsible for feature development in the middleware.

    `,
    bullets: [
      "Trusted as the gatekeeper of environments relied on by a team of 60+.",
      "Lead and mentor of a team of five.",
      "Proposed and owned developer tooling and experience improvements.",
      "Implemented a Javascript framework that supported other teams.",
      "Implemented the security feature of the client.",
      "Created and implemented a UX review noting usability and performance improvements for the application.",
    ],
  },
  {
    title: "NEON",
    client: "Sky TV",
    brief: `

      NEON is Sky TV's entry into the New Zealand TV on demand market. Our project's team was responsible for 
      implementing the Front-end and API supporting other NEON product sitting on different platforms.

      My role was a Front-end developer with close contact to the Web API and UX layers.

    `,
    bullets: [
      "With the team, implement Neon's web application using angular.",
      "Integrated with a Salesforce API.",
      "Worked remotely for a thrid of the time.",
    ],
  },
  {
    title: "Crew Forms",
    client: "Air New Zealand",
    isDisabled: true,
    brief: `

      The Crew Forms application looked to turn a paper based form into a mobile tablet-based solution.

      The experience of these forms was improved with the new technology and with a change in platform 
      the forms were able to be re-imagined to provide a better user experience.

      I worked on the project in its second phase, bringing in new features and tidying the first implementation.

    `,
    bullets: [
      "Polished up the app correcting dozens of rendering bottlenecks, resulting in a jank-free hybrid solution.",
      "Worked with the UX and Design team to best fit solutions with the technology stack.",
      "Extended the apps feature list and matching test coverage.",
      "Provided solutions to bugs found within open source libraries",
    ],
  },
  {
    title: "Name learning game",
    client: "Private",
    isDisabled: true,
    brief: `
      We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.

      The brief was to create an educational tool that would help staff learn the names of their clients.

      We placed well in the competition, gaining access to the company's evaluation panel for future
      projects. Shortly after Solnet made a winning proposal for a separate project.

    `,
    bullets: [
      "Created a proof of concept application in 3 days.",
      "Succeeded in gaining a position on the client's project panel.",
      "Worked effectively with other Javascript, UX and UI developers in parallel streams.",
    ],
  },
];

class Bullet extends Component {
  render() {
    return (
      <ul className="projectBullets">
        {this.props.bullets.map((bullet, i) => {
          return <li key={i}>{bullet}</li>;
        })}
      </ul>
    );
  }
}

class ImageContainer extends Component {
  render() {
    return (
      <div className="imageContainer">
        {this.props.images.map((image, i) => {
          var imageId = `project-${this.props.projectIndex}-image-${i}`;
          var onOpenAction = "tap:" + imageId;
          var onCloseAction = "tap:" + imageId + ".close";
          return (
            <div key={i} className="projectImage">
              <amp-img
                width="2880"
                height="1610"
                role="button"
                tabindex="0"
                on={onOpenAction}
                layout="responsive"
                src={image.thumbnail}
              />
              <amp-lightbox id={imageId} layout="nodisplay">
                <div className="projectLightbox">
                  <amp-img
                    src={image.main}
                    width="2880"
                    height="1610"
                    tabindex="-1"
                    role="button"
                    on={onCloseAction}
                  />
                </div>
              </amp-lightbox>
            </div>
          );
        })}
      </div>
    );
  }
}

export default class Projects extends Component {
  render() {
    return (
      <div className="root">
        <h1 id="Projects" className="projectsTitle">
          Projects
        </h1>

        <div className="projectsContainer">
          {projects
            .filter((project) => !project.isDisabled)
            .map((project, i) => {
              return (
                <div key={i} className={i === 0 ? "firstProject" : "project"}>
                  <div className="projectContainer">
                    <div className="projectContent">
                      <div className="projectTitleContainer">
                        <h2 className="projectTitle">{project.title}</h2>
                        <em>{project.client}</em>
                      </div>
                      <div>
                        <p className="projectBrief">{project.brief}</p>
                        <Bullet bullets={project.bullets} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
