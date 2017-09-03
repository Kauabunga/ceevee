/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.scss';


const projects = [
  {
    title: 'Lending and Onboarding',
    client: 'BNZ',
    isDisabled: false,
    brief: `

      I joined a team at BNZ to help in transforming their Lending and Onboarding systems, aiming to improve the experience 
      for customers and bank staff. This transformation was supported by a new way of delivery, promoting more modular systems
      design and implementation with supporting Platforms and Devops processes.

      I shared the lead for the Front-end implementation of two major applications and a component library.

    `,
    bullets: [
      'Pioneered application development seeing Angular 2 through its beta releases.',
      'Promoted and adapted a UI component library for multiple applications.',
      'Guided Front-end developers through best practices, process and tooling.',
      'Guided UI Integration testers through best practices, process and tooling.',
      'Followed and fed back into areas close to UI to ensure smoother transitions including UX, Platforms, Devops, and API.',
      'Involved in successfully delivering the systems first release.',
    ]
  },
  {
    title: 'Employment Agreement Builder',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `

      EAB is an application for small to medium businesses to create new Employment agreements while learning
      about employment law with easy-to-digest content.
  
      I worked on this as a JavaScript developer in a small team, 
      guiding another developer and automation tester with the language and tooling.  
      
      The project exceeded its objectives and was built, tested, and delivered in three months.

    `,
    bullets: [
      'Practiced BDD and TDD ending up with a feature complete integration and unit test suite.',
      'Created and published a decoupled CMS component.',
      'Created a reusable data-driven forms solution reused for a second MBIE Policy Builder application.',
      'Sold a full stack JavaScript solution to architects.',
      'Implemented a Node.js micro service handling 10x expected load.',
      'Implemented a CI environment that performed automated testing and releasing a dozen times a day.',
      'Pushed a docker solution bringing build and deployment time down to minutes rather than hours.',
    ]
  },
  {
    title: 'Online Banking',
    client: 'Westpac',
    brief: `

      I was part of a Westpac team to evolve their online banking experience, originally rolled in as an IBM Worklight consultant and dev ops engineer.

      I helped keep the project oiled by mediating communications between developers from API and Front-end teams.
      I improved automation in local, development, and test environments helping developers become more autonomous.

      After two months my role extended to a technical lead of a team of five, responsible for feature development in the middleware.

    `,
    bullets: [
      'Presented and owned the solutions of several developer tooling and experience improvements.',
      'Technical leader and mentor of a team of five covering a wide spread of technologies and environments.',
      'Trusted as the gatekeeper of critical development and test environments relied on by a team of 60.',
      'Implemented a JavaScript middleware framework that improved the reuse and reliability of the middleware HTTP adapters.',
      'Implemented the security feature encompassing the client and middleware layers.',
      'Presented a UX review noting several usability and performance improvements for the application.',
    ]
  },
  {
    title: 'NEON',
    client: 'Sky TV',
    brief: `

      NEON is Sky TV's entry into the New Zealand TV on demand market. Our project's team was responsible for 
      implementing the Front-end and the API supporting other NEON apps sitting on different platforms.

      My role was a Front-end developer with a close interest in the Web API and UX layers.

    `,
    bullets: [
      'Worked with the Front-end team to implement an angular application within Liferay',
      'Designed API transforming PAAS data sources to support the multiple clients',
      'Presented UX and design alternatives to client.',
      'Worked remotely for half the project.',
      'Managed my time effectively within a time pressured environment.',
    ]
  },
  {
    title: 'Crew Forms',
    client: 'Air New Zealand',
    brief: `

      The Crew Forms application looked to turn a paper based form into a mobile tablet-based solution.

      The experience of these forms was improved with the new technology and with a change in platform 
      the forms were able to be re-imagined to provide a better user experience.

      I worked on the project in its second phase, bringing in new features and tidying the first implementation.
    `,
    bullets: [
      'Polished up the app correcting dozens of rendering bottlenecks, resulting in a jank-free hybrid solution.',
      'Worked with the UX and Design team to best fit solutions with the technology stack.',
      'Extended the apps feature list and matching test coverage.',
      'Provided solutions to bugs found within open source libraries',
    ]
  },
  {
    title: 'Name learning game',
    client: 'Private',
    brief: `
      We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.

      The brief was to create an educational tool that would help staff learn the names of their clients.

      We placed well in the competition, gaining access to the company's evaluation panel for future
      projects. Shortly after Solnet made a winning proposal for a separate project.

    `,
    bullets: [
      'Created a proof of concept application in 3 days.',
      'Succeeded in gaining a position on the client\'s project panel.',
      'Worked effectively with other JavaScript, UX and UI developers in parallel streams.',
    ]
  },
];

class Bullet extends Component {
  render() {
    return (
      <ul className={s.projectBullets}>
        {
          this.props.bullets.map((bullet, i) => {
            return (
              <li key={i}>{bullet}</li>
            );
          })
        }
      </ul>
    );
  }
}

class ImageContainer extends Component {
  render() {
    return (
      <div className={s.imageContainer}>
        {
          this.props.images.map((image, i) => {
            var imageId = `project-${this.props.projectIndex}-image-${i}`;
            var onOpenAction = 'tap:' + imageId;
            var onCloseAction = 'tap:' + imageId + '.close';
            return (
              <div key={i} className={s.projectImage}>
                <amp-img width="2880" height="1610" role="button" tabindex="0" on={onOpenAction} layout="responsive" src={image.thumbnail}></amp-img>
                <amp-lightbox id={imageId} layout="nodisplay">
                  <div className={s.projectLightbox}>
                    <amp-img src={image.main} width="2880" height="1610" tabindex="-1" role="button" on={onCloseAction}></amp-img>
                  </div>
                </amp-lightbox>
              </div>
            );
          })

        }
      </div>
    );
  }
}

class Projects extends Component {

  render() {
    return (
      <div className={s.root}>
        <h1 id="Projects" className={s.projectsTitle}>Projects</h1>

        <div className={s.projectsContainer}>
          {
            projects.filter(project => !project.isDisabled).map((project, i) => {
              return (
                <div key={i} className={i === 0 ? s.firstProject : s.project}>
                  <div className={s.projectContainer}>
                    {/*<ImageContainer images={project.images} projectIndex={i}/>*/}

                    <div className={s.projectContent}>
                      <div className={s.projectTitleContainer}>
                        <h2 className={s.projectTitle}>{project.title}</h2>
                        <em>{project.client}</em>
                      </div>
                      <div>
                        <p className={s.projectBrief}>{project.brief}</p>
                        <Bullet bullets={project.bullets} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>
    );
  }

}

export default withStyles(Projects, s);
