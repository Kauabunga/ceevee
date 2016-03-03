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

Through from the early stages of a project, imagining the experience and drawing a solution,
the inbetween, towards the publishing of a project,

... I have something to offer ...




Open minded - Ability to problem solve/learn.

... Follow on from learning, learn from team, learn with others ... Ability to work with and as part of the team.

The details get me, optimising layout and painting, micro user interactions, ....
Ensuring abstraction, testing, and writting code that reads like an article.

`;


const text2 = `

I am a year zero adopter of JavaScript technologies, Angular, React, Node.js, and Express,
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
        <div className={s.content}>
          Leave me a message at <b className={s.blue}>hello@carson.kiwi</b>
        </div>
      </div>
    );
  }

}

export default withStyles(Introduction, s);
