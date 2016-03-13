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
    title: 'Employment Agreement Builder',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `
      EAB is a web application realised to provide value to both front end users along with those responsible for its maintenance.

      Small to medium business parties are able to use the tool to step through creating a new Employment agreement while at the
      same time educating themselves about employment law with easy to digest content and links.

      I lead the implementation design while teaching a Senior Java developer transitioning to JavaScript.
      The project ran successfully meeting its internal and external objectives finishing in three months.
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
      'Angular', 'Node.js', 'Docker', 'Agile', 'Azure', 'Heroku', 'Jenkins'
    ],
    bullets: [
      'Practiced BDD and TDD development processes ending up with a feature complete automated test suite.',
      'Created a reusable data-driven forms solution that would support future contract builders for MBIE.',
      'Helped sell a through and through Javascript solution internally to Solnet and externally to MBIE.',
      'Went beyond the static wireframes creating my own motion design and micro user interactions.',
      'Created a Node.js micro services implementation handles 10x expected load on low cost two node cloud infrastructure.',
      'Created and published a decoupled CMS component to support the application that provided more features than the Javascript CMS landscape at the time.',
      'Created internal email, document, form components already reused on other projects.',
      'Created security implementation that sailed through 3rd party security review.',
      'Implemented a CI environment that performed automated testing and releases a dozen times a day avoid any manual tasks.',
      'Pushed docker solution handling node scaling, static servers and bringing build and deployment time down to minutes rather than hours.'
    ]
  },
  {
    title: 'Online Banking',
    client: 'Westpac',
    brief: `

      I became part of the Westpac project to rewrite their online banking applications originally rolled in as an IBM Worklight consultant and dev ops engineer.

      I helped keep the project oiled by mediating communications between developers from API and Client teams along with improving automation in local, developmenet, and test environments.
      This automation helped developers become more autonomous providing an interface for logs, deployments, and environment stats.

      After a couple of month went by and the teams trust in me grew I became tech lead of a team five large responsible for feature development in the middleware
      security in the client.

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
      'Worked with a wide spread of technology: Backbone, HTML, CSS, JavaScript, Jenkins, iOS, Android, Git, Svn, Java, Spring, IBM WebSphere, IBM Worklight, COBOL.'
    ]
  },
  {
    title: 'NEON',
    client: 'Sky TV',
    brief: `

      NEON is Sky TV's entry into the New Zealand tv on demand market. Our project was responsible for implementing the Web client
      and the Web API supporting other NEON apps sitting on other platforms.

      I played the role of a Front end developer with a close interest in the Web API and UX layers that my tasks depended on.

      I was tasked with designing a set of middleware REST API based on a SAAS backend that the client layers would consume.

      I was also tasked at filling in gaps in the UX and design which the static wireframes designed in a separate project did not cover.

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
      'Managed my time effectively within a time critical environment completing and communicating tasks to project managers.',
      'Designed REST API transforming PAAS data sources to support the multiple client layers',
      'Collaborated with UX and design teams ensuring good usability of solution.',
      'Owned and presented UX and design alternatives to client.',
      'Worked remotely for half the project while still tracking my tasks in good time.'
    ]
  },
  {
    title: 'Crew Forms',
    client: 'Air NZ',
    brief: `

      Integration with an existing data source turned API.

      Multiple phases.

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
      'Data driven forms',
      'Hybrid application design running on Supersonic',
      'Polished the application removing dozens of browser rendering bottlenecks providing a jank free hybrid solution'
    ]
  },
  {
    title: 'Name game',
    client: 'Private',
    brief: `
      We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.

      The brief was to create an educational tool that would help staff learn the names of their clients.

      Our UX and developer streams worked well together from the start, laying foundations for one another and we managed
      to create a complete working iOS game that would quiz the user on peoples names with multiple mini-games supported by
       a global leaderboard.

      We placed well in the competition winning the prize of placing in the companies evaluation panel for future
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
      'Succeeded in gaining a position on the clients project panel.',
      'Hybrid application design.',
      'Super agile.',
      'Worked effectively with other JavaScript, UX and UI developers in parallel.'
    ]
  },
  {
    title: 'Employee Cost Calculator',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `

      Nearly pure client side solution (minus email).

    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Angular', 'CSS/HTML', 'Grunt.js'
    ],
    bullets: [
      'Created proof of concept application as presales.',
      'Contributed to the RFP solution design and estimates.',
      'Designed and implemented Google Analytics solution.',
      'Managed UAT test handover.'
    ]
  },
  {
    title: 'Public website',
    client: 'Solnet',
    brief: `
      Full-stack javascript project

      Solo developer picking up JavaScript, CSS, HTML
    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Angular', 'CSS/HTML', 'Grunt.js', 'Node.js', 'Express'
    ],
    bullets: [
      'Self managed team.',
      'Collaberated closely with designer and UX roles.',
      'HTML, CSS, JS development.',
      'Implemented Node.js SEO and decoupled static content.'
    ]
  },
  {
    title: 'Shared Capability',
    client: 'ACC',
    brief: `
      Shared capability focused on developing and sharing best practices within a platform of technology to support parellel and future projects.

      This was a golden opportunity to grow as a Junior cementing practices and theory acquired through university. I was exposed to a variety of technology and process
      including CI, Agile, UX, Testing, Java, IBM, and JavaScript.

      It was this project that my interest in JavaScript and UX starting spinning, thrilled by the craft and challenge resulting in the difference between something lovable or not.

    `,
    isLarge: true,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    technologies: [
      'Java', 'Websphere', 'IBM Portal', 'IBM WCM', 'JQuery', 'Jenkins'
    ],
    bullets: [
      'Implemented CI ',
      'Quick learner',
      'Enterprise application environments',
      'Integrated IBM Forms Experience Builder product with IBM Portal collaborating with IBM development team and providing product defect solutions.'
    ]
  },

];

class Bullet extends Component {
  render() {
    return (
      <ul>
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
            projects.map((project, i) => {
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
                        <p>{project.brief}</p>
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
