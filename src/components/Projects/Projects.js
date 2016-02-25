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

import Chance from 'chance';
const myChance = new Chance();

const projects = [
  {
    title: 'Employment Agreement Builder',
    client: 'Ministry of Business and Innovation and Employment',
    brief: `

      EAB is a web application imagined to provide value to both front end users along with those responsible for its maintenance.

      Small to medium business use the tool to step through creating a new Employment agreement while at the same time educate themselves about employment law with easy to digest content.

      The project ran successfully meeting its objectives finishing in three months. I lead the solution design and implementation while mentoring a Senior Java developer transitioning to Javascript.

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
    bullets: [
      'Followed BDD and TDD development processes',
      'Data driven forms',
      'Through and through Javascript - client, server, test suite.',
      'Created a complete automation test suite covering close to all app features.',
      'Node.js micro services implementation',
      'Created a decoupled CMS component to support the application. See http://cmeasy.herokuapp.com/',
      'Created a decoupled html to docx and pdf rendering component',
      'Security implementation',
      'Performance profiling and reviews',
      'Automated testing and releases a dozen times a day',
      'Docker',
      'Angular.js front end'
    ]
  },
  {
    title: 'NEON',
    client: 'Sky Television',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Time critical environment',
      'Collaberation with UX and design teams ensuring good usability of solution',
      'Worked remotely for half the project',
    ]
  },
  {
    title: 'Online Banking',
    client: 'Westpac',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Tech leading and mentoring of a team five large',
      'Created the Client and Middleware security feature',
      'Middleware Javascript framework design, implementation, and testing',
      'Gatekeeper of critical environments used by a team of 60',
      'Provided IBM Worklight and Backbone.js consulting',
      'Hybrid and webapp application design',
      'Performance profiling of application'
    ]
  },
  {
    title: 'Air Forms',
    client: 'Air New Zealand',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Data driven forms from external services',
      'Hybrid application design',
      'Polished the application increasing rendering performance and removing jank'
    ]
  },
  {
    title: 'Learning clients name game',
    client: 'Classified',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Created a complete proof of concept application in 3 days',
      'Hybrid application design'
    ]
  },
  {
    title: 'Employee Cost Calculator',
    client: 'Ministry of Business and Innovation and Employment',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Created proof of concept application',
      'Contributed to the RFP solution design and estimates',
      'Designed and implemented Google Analytics solution',
      'Managed UAT test handover',
    ]
  },
  {
    title: 'Public website',
    client: 'Solnet',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Self managed team',
      'Collaberated closely with designer and UX roles',
      'HTML, CSS, JS development',
      'Implemented Node.js SEO and decoupled static content'
    ]
  },
  {
    title: 'ACC',
    client: 'Shared Capability',
    brief: '',
    isLarge: false,
    images: [
      {
        main: require('./EAB-1000.jpg'),
        thumbnail: require('./EAB-300.jpg')
      }
    ],
    bullets: [
      'Java developer',
      'Quick learner',
      'Enterprise application environments',
      'Successfully integrated IBM Forms Experience Builder product with IBM Portal collaberating with IBM development team and providing development experience solutions'
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
        <h1 className={s.projectTitle}>Projects</h1>

        <div className={s.projectsContainer}>
          {
            projects.map((project, i) => {
              return (
                <div key={i} className={i === 0 ? s.firstProject : s.project}>
                  <div className={s.projectContainer}>

                    <ImageContainer images={project.images} projectIndex={i}/>

                    <div className={s.projectContent}>
                      <h2 className={s.projectTitle}>{project.title}</h2>
                      <em>{project.client}</em>
                      <p>{project.brief}</p>
                      <Bullet bullets={project.bullets} />
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
