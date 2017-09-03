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

      Joined a team at BNZ to help in transforming their Lending and Onboarding systems aiming to improve the experience 
      for customers, bank staff. This transformation was supported by a new way of delivery, promoting more modular systems
      design and implementation with supporting Platforms and Devops processes.

      I joined as a Front End developer, sharing lead for the implementation of two major applications and a component library.

    `,
    bullets: [
      'Pioneered application development seeing Angular 2 through its beta releases.',
      'Promoted and adapted a UI component library for the projects multiple applications.',
      'Guided Front End developers through best practices, process and tooling.',
      'Guided UI Integration testers through best practices, process and tooling.',
      'Followed and feed back into areas close to UI to ensure smoother transitions including UX, Platforms, Devops, and API.',
      'Involved in successfully delivering the systems first release.',
    ]
  },
  {
    title: 'Employment Agreement Builder',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `

      Using EAB, small to medium businesses can step through the process of creating a new Employment agreement while learning
      about employment law with easy-to-digest content.

      The project exceeded its objectives and was built, tested, and delivered in three months.

    `,
    bullets: [
      'Practiced BDD and TDD ending up with a feature complete integration and unit test suite.',
      'Created and published a decoupled CMS component.',
      'Created a reusable data-driven forms solution reused for a second MBIE Policy builder application.',
      'Sold a full stack JavaScript solution to architects.',
      'Implemented a Node.js micro services implementation handling 10x expected load.',
      'Implemented a CI environment that performed automated testing and releases a dozen times a day avoid any manual tasks.',
      'Pushed a docker solution bringing build and deployment time down to minutes rather than hours.',
    ]
  },
  {
    title: 'Online Banking',
    client: 'Westpac',
    brief: `

      I was part of a Westpac team to evolve their online banking experience, originally rolled in as an IBM Worklight consultant and dev ops engineer.

      I helped keep the project oiled by mediating communications between developers from API and Client teams.
      I improved automation in local, development, and test environments helping developers become more autonomous.

      After two months my role extended to technical lead of a team five large responsible for feature development in the middleware including client security.

    `,
    bullets: [
      'Presented and owned the solutions of several developer tooling and experience improvements.',
      'Technical leader and mentor of a team five large covering a wide spread of technologies and environments.',
      'Trusted as the gatekeeper of critical development and test environments relied on by a team 60 large.',
      'Implemented a JavaScript middleware framework that improved the abstraction and reliability of the middleware HTTP adapters.',
      'Implemented the security feature encompassing the client and middleware layers.',
      'Presented a UX review noting several usability and performance improvements for the application.',
    ]
  },
  {
    title: 'NEON',
    client: 'Sky TV',
    brief: `

      NEON is Sky TV's entry into the New Zealand TV on demand market. Our project was responsible for implementing the Web client
      and the Web API supporting other NEON apps sitting on other platforms.

      My role was a front end developer with a close interest in the Web API and UX layers that my tasks depended on.

    `,
    bullets: [
      'Worked with the Front end team to implement an angular application within Liferay',
      'Designed REST API transforming PAAS data sources to support the multiple client layers',
      'Presented UX and design alternatives to client.',
      'Worked remotely for half the project.',
      'Managed my time effectively within a time pressured environment completing and communicating tasks to project managers.',
    ]
  },
  {
    title: 'Crew Forms',
    client: 'Air New Zealand',
    brief: `

      Crew forms was a heavily digital project looking to turn a paper based form into a mobile tablet-based solution.

      The experience of these forms was improved with the new technology and with a change in platform the forms were allowed to be reimagined
      through UX process to further better user experience rather than being a clone of the paper solution.

      I worked on the project in its second phase after its first release bringing in a couple of new features and polishing the first implementation.
    `,
    bullets: [
      'Polished the app correcting dozens of browser rendering bottlenecks resulting in a jank free hybrid solution.',
      'Worked with UX and design team to best fit solutions with the technology stack.',
      'Extended the apps feature list and matching test coverage.',
      'Provided solutions bugs found within open source libraries'
    ]
  },
  {
    title: 'Name learning game',
    client: 'Private',
    brief: `
      We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.

      The brief was to create an educational tool that would help staff learn the names of their clients.

      We were placed well in the competition winning the prize of placing in the company's evaluation panel for future
      projects followed shortly after with a winning proposal for a separate project.

    `,
    bullets: [
      'Created a complete proof of concept application in 3 days.',
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
