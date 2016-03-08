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

const main = `
  I am passionate when creating simple and beautiful apps.
`;


const text = `

  I take interest in the entire software development process.
  Through from the start when a project is imagined towards its end as a project is released. I have experienced a range of
     roles and tasks covering its broad range.

`;

const text2 = `

  I consider some of my key skills to include: Problem solving, Speed to learn, Openmindedness, Being a team player, and Communication.

`;


const text3 = `

I am a year-zero adopter of JavaScript technologies, Angular, React, Node.js, and Express,
embracing the continuing shift towards simplier and more agile systems and process.

I love working with JavaScript and all the technologies and process it enables.

`;


class Introduction extends Component {


  render() {
    return (
      <div className={s.root}>
        <div className={s.content}>
        <b className={s.blue}>{main}</b>
        </div>
        <div className={s.content}>{text}</div>
        <div className={s.content}>{text2}</div>
        <div className={s.content}>{text3}</div>
        <div className={s.content}>
          Come say hi at <b className={s.blue}>hello@carson.kiwi</b>
        </div>
      </div>
    );
  }

}

export default withStyles(Introduction, s);
