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
import s from './Experience.scss';

import Chance from 'chance';
const myChance = new Chance();

const jobs = [
  {
    title: 'Solnet',
    date: 'Aug 2012 - Now ( 3.5 years )',
    brief: `
    
    I started Solnet a week out from graduating beginning in the delivery team of the company. 
    A year in I moved on over into the Digital team where my love for JavaScript and appreciation for UX boomed.
    
    Experience with several significant clients mainly as a developer role but have been allowed to add value to all aspects
    
    More recently in my time at Solnet I have been involved in mentoring others in JavaScript tooling and practices
    
    `,
    svg: {
      src: require('./solnet.svg'),
      height: '2215px',
      width: '770px'
    }
  },
  {
    title: 'Research Project: Query Expansion',
    date: 'Nov 2011 - March 2012 ( 4 months )',
    brief: `
    My second research opportunity was offered by the supervisor of my honours project to further the project towards an end goal of a draft research paper.
    
    The paper was submitted and accepted to an Australasian Web Intellegence conference.
    `,
    svg: {
      src: require('./vuw.png'),
      height: '792px',
      width: '192px'
    }
  },
  {
    title: 'Research Project: Eye Gaze tracking',
    date: 'Nov 2010 - March 2011 ( 4 months )',
    brief: `
    I was awarded a research scholarship at the end of my 300 level university year giving me experience in planning directing a research project.
    With support from my supervisor and his team, I contributed to development on an open source gaze tracking system helping it evolve to a level where it might benefit the university, saving an equivelant commercial product cost of  $10,000. 
    In addition to learning about eye-tracking systems I gained experience in project practice and quickly learned C#.
    `,
    svg: {
      src: require('./vuw.png'),
      height: '792px',
      width: '192px'
    }
  },
  {
    title: 'Cool Bananas',
    date: 'Nov 2009 - March 2010 ( 4 months )',
    brief: `
    Interning with a fellow student alongside a senior software engineer I worked on a project developing a prototype scripting parser and runtime for embeded systems.
    The experience helped cement my years study learning C, Agile processes, and testing practices.
    The project proved successful gaining further funding being developed into a commercial product.
    `
  }
];

class Experience extends Component {

  render() {
    return (
      <div className={s.root}>
        <h1 className={s.experienceTitle}>Experience</h1>

        {
          jobs.map(function(job, i){
            return (
              <div key={i} className={i !== jobs.length - 1 ? s.job : s.lastJob}>
                <div className={s.jobContentContainer}>
                  <div className={s.jobContent}>
                    <div className={s.titleContainer}>
                      <h2 className={s.jobTitle}>{job.title}</h2>
                      <em>{job.date}</em>
                    </div>
                    {
                       job.svg ? (<div className={s.jobImage}><amp-img src={job.svg.src} height={job.svg.height} width={job.svg.width} layout="responsive"></amp-img></div>) : null
                    }
                    <p className={s.jobBrief}>{job.brief}</p>
                  </div>
                </div>
              </div>
            );
          })
        }

      </div>
    );
  }

}

export default withStyles(Experience, s);
