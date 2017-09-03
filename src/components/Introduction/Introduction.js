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
import s from './Introduction.scss';


const text = `
  I plan and deliver throughout the entire software development process, from when a project is imagined to its released.

  I've worked on a number of large projects, demonstrating my experience through a range of roles.

`;

const text2 = `

  My key attributes include: problem solving, speed and passion to learn, open mindedness, and being a team player.

`;


const text3 = `

  I am an early adopter of JavaScript technologies, React, Angular, Node.js, and Express,
  embracing the continuing shift towards simpler and more agile systems and process.

`;

const text4 = `

  I am at home working and sharing JavaScript along with all the technologies and processes it enables.

`;


class Introduction extends Component {


  render() {
    return (
      <div className={s.root}>
        <div className={s.firstSentence}>
          <b className={s.blue}>I am passionate about creating simple and beautiful&nbsp;apps.</b>
        </div>
        <div className={s.content}>{text}</div>
        <div className={s.content}>{text2}</div>
        <div className={s.content}>{text3}</div>
        <div className={s.content}>{text4}</div>
        <div className={s.content}>
          Get in touch at <b className={s.blue}>hello@carson.kiwi</b>
        </div>
      </div>
    );
  }

}

export default withStyles(Introduction, s);
