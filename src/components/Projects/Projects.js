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
    title: 'Lending Application',
    client: 'BNZ',
    isDisabled: true,
    brief: `

      LENDINGNGNGNGNGNGN

    `,
    bullets: [
      'Implemented a CI environment that performed automated testing and releases a dozen times a day avoid any manual tasks.',
      'Pushed docker solution handling node scaling, static servers and bringing build and deployment time down to minutes rather than hours.'
    ]
  },
  {
    title: 'Employment Agreement Builder',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `

      Using EAB, small to medium businesses can step through the process of creating a new Employment agreement while learning
      about employment law with easy-to-digest content and links.

      The project met its internal and external objectives and was completed in three months.

    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-2-1000.jpg'),
        thumbnail: require('./EAB-2-300.jpg')
      },
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Angular', 'Node.js', 'Docker', 'Agile', 'Azure', 'Heroku', 'Jenkins', 'Travis'
    ],
    bullets: [
      'Practiced BDD and TDD development processes ending up with a feature complete integration and unit test suite.',
      'Created and published a decoupled CMS component.',
      'Created a reusable data-driven forms solution reused for a second MBIE Policy builder application.',
      'Helped sell a through and through JavaScript solution internally to Solnet and externally to MBIE.',
      'Created a Node.js micro services implementation handling 10x expected load.',
      'Created security implementation that sailed through 3rd party security review.',
      'Implemented a CI environment that performed automated testing and releases a dozen times a day avoid any manual tasks.',
      'Pushed docker solution handling node scaling, static servers and bringing build and deployment time down to minutes rather than hours.'
    ]
  },
  {
    title: 'Online Banking',
    client: 'Westpac',
    brief: `

      I was part of a Westpac project to rewrite their online banking applications originally rolled in as an IBM Worklight consultant and dev ops engineer.

      I helped keep the project oiled by mediating communications between developers from API and Client teams.
      I improved automation in local, development, and test environments, which helped developers become more autonomous providing an interface for logs, deployments, and environment stats.

      After two months I was promoted to technical lead of a team five large responsible for feature development in the middleware including client security.

    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Websphere', 'Backbone.js', 'Worklight', 'Agile', 'Java', 'Spring', 'COBOL', 'Jenkins'
    ],
    bullets: [
      'Presented and owned the solutions of several developer tooling and experience improvements.',
      'Technical leader and mentor of a team five large covering a wide spread of technologies and environments.',
      'Trusted as the gatekeeper of critical development and test environments relied on by a team 60 large.',
      'Designed, implemented, and tested a JavaScript middleware framework that improved the abstraction and reliability of the middleware HTTP adapters.',
      'Designed, implemented, and tested the security feature encompassing the client and middleware layers.',
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

      I was tasked with designing a set of middleware REST API based on a SAAS backend that the client layers would consume.

      I was also asked to fill gaps in the UX and design that the static wireframes designed in a separate project did not cover.

    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Liferay', 'Angular', 'Java', 'Spring'
    ],
    bullets: [
      'Managed my time effectively within a time pressured environment completing and communicating tasks to project managers.',
      'Designed REST API transforming PAAS data sources to support the multiple client layers',
      'Collaborated with UX and design teams ensuring good usability of solution.',
      'Owned and presented UX and design alternatives to client.',
      'Worked remotely for half the project.'
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
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Cordova', 'Angular.js', 'Steroids.js', 'Agile', 'Ionic', 'CSS/HTML'
    ],
    bullets: [
      'Polished the app correcting dozens of browser rendering bottlenecks resulting in a jank free hybrid solution.',
      'Worked with UX and design team to best fit solutions with the technology stack.',
      'Extended the apps feature list and matching test coverage under time.',
      'Provided a solution to a bug found within the hybrid framework Steroids.js'
    ]
  },
  {
    title: 'Name learning game',
    client: 'Private',
    brief: `
      We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.

      The brief was to create an educational tool that would help staff learn the names of their clients.

      Our UX and developer streams worked well together from the start, laying foundations for one another and we managed
      to create a complete working iOS game that would quiz the user on people's names with multiple mini-games supported by
       a global leaderboard.

      We were placed well in the competition winning the prize of placing in the company's evaluation panel for future
      projects followed shortly after with a winning proposal for a separate project.

    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Cordova', 'Angular', 'CSS/HTML', 'Grunt.js'
    ],
    bullets: [
      'Created a complete proof of concept application in 3 days.',
      'Succeeded in gaining a position on the client\'s project panel.',
      'Worked effectively with other JavaScript, UX and UI developers in parallel streams.'
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
