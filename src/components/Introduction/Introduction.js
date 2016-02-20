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

import Chance from 'chance';
const myChance = new Chance();


const text = `

I am passionate when creating simple and beautiful web app solutions.

Whole process. design -> release.

Appreciation for processes through the entire stack - UX, Client, Server, Testing, and Architecture.

I enjoy the details, optimising layout and painting, micro user interactions,

Enjoy the landscape -> security, infastructure, ci,

Early adoptor of Javascript technologies Angular, React, Node.js, Express.

Embracing the shift towards more agile and simplier systems.

`;


class Introduction extends Component {


  render() {
    return (
      <div className={s.root}>
        <div className={s.content}>{text}</div>
        <div className={s.content}>
          Leave me a message at <b className={s.email}>hello@carson.kiwi</b>
        </div>
      </div>
    );
  }

}

export default withStyles(Introduction, s);
