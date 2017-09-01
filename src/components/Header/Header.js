/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

var arrow = require('./arrow.svg');
var printer = require('./printer.svg');

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Carson Bruce</h1>

          <em className={s.onlineView}>View at carson.kiwi</em>

        {/*
          <a className={s.printButton} href="javascript:window.print()">
            <amp-img src={printer} width="20px" height="20px"></amp-img>
          </a>
        */}
          <a className={s.downloadButton} href="/carson.bruce_cv.pdf" target="_blank">
            <amp-img src={arrow} width="20px" height="20px"></amp-img>
          </a>

        </div>
      </div>
    );
  }
}

//<h1 className={s.cv}>CV</h1>

export default withStyles(Header, s);
