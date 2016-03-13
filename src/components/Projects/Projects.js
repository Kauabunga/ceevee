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
      'Practiced BDD and TDD development processes ending up with a feature complete automated test suite',
      'Created a reusable data-driven forms solution that would support future contract builders for MBIE',
      'Helped sell a through and through Javascript solution internally to Solnet and externally to MBIE',
      'Went beyond the static wireframes creating my own motion design and micro user interactions',
      'Created a Node.js micro services implementation handles 10x expected load on low cost two node cloud infrastructure',
      'Created a decoupled CMS component to support the application that provided more features than the Javascript CMS landscape at the time - see cmeasy.herokuapp.com',
      'Created internal email, document, form components already reused on other projects',
      'Created security implementation that sailed through 3rd party security review',
      'Implemented a CI environment that performed automated testing and releases a dozen times a day avoid any manual tasks',
      'Pushed docker solution handling node scaling, static servers and bringing build and deployment time down to minutes rather than hours'
    ]
  },
  {
    title: 'NEON',
    client: 'Sky TV',
    brief: `
      NEON is Sky TV's entry into the New Zealand tv on demand market. Our project was responsible for the Web client and the
      Web API supporting other NEON apps sitting on other platforms.
    `,
    isLarge: false,
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
      'Managed my time effectively within a time critical environment completing and communicating tasks to project managers',
      'Collaberated with UX and design teams ensuring good usability of solution',
      'Presented UX and design solution alternatives to client',
      'Worked remotely for half the project while still tracking my tasks in good time'
    ]
  },
  {
    title: 'Online Banking',
    client: 'Westpac',
    brief: `

      Originally going in as a dev ops and IBM Worklight consultant - after several months, as the teams trust grew, my role expanded.

    `,
    isLarge: false,
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
      'Presented and owned the solutions of several developer tooling and experience improvements',
      'Technical leader and mentor of a team five large covering a wide spread of technologies and environments',
      'Trusted as the gatekeeper of critical development and test environments relied on by a team 60 large',
      'Designed, implemented, and tested a JavaScript middleware framework that improved the abstraction and reliability of the middleware HTTP adapters',
      'Designed, implemented, and tested the security feature encompassing the client and middleware layers',
      'Presented a UX review noting several usability and performance improvements for the application'
    ]
  },
  {
    title: 'Air Forms',
    client: 'Air NZ',
    brief: `

    `,
    isLarge: false,
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
    isLarge: false,
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
      'Created a complete proof of concept application in 3 days',
      'Succeeded in gaining a position on the clients project panel',
      'Hybrid application design',
      'Super agile',
      'Worked effectively with other JavaScript, UX and UI developers in parallel'
    ]
  },
  {
    title: 'Employee Cost Calculator',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `


    `,
    isLarge: false,
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
      'Created proof of concept application as presales',
      'Contributed to the RFP solution design and estimates',
      'Designed and implemented Google Analytics solution',
      'Managed UAT test handover',
    ]
  },
  {
    title: 'Public website',
    client: 'Solnet',
    brief: `
      Full-stack javascript project

      Solo developer picking up JavaScript, CSS, HTML
    `,
    isLarge: false,
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
      'Self managed team',
      'Collaberated closely with designer and UX roles',
      'HTML, CSS, JS development',
      'Implemented Node.js SEO and decoupled static content'
    ]
  },
  {
    title: 'Shared Capability',
    client: 'ACC',
    brief: `



    `,
    isLarge: false,
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
      'Java developer',
      'Quick learner',
      'Enterprise application environments',
      'Successfully integrated IBM Forms Experience Builder product with IBM Portal collaborating with IBM development team and providing development experience solutions'
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
        <h1 id="Projects" className={s.projectTitle}>Projects</h1>

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
