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


const text = 'Passionate. ...' + myChance.paragraph({sentences: 3});


class Introduction extends Component {


  render() {
    return (
      <div className={s.root}>
        <div className={s.content}>{text}</div>
        <div className={s.content}>
          Get in touch <b>hello@carson.kiwi</b>
        </div>
      </div>
    );
  }

}

export default withStyles(Introduction, s);
