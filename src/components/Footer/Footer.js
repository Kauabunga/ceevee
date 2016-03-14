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
import s from './Footer.scss';
import Link from '../Link';

const text = ``;

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <div>
            <span className={s.text}>{text}</span>
            <span className={s.text}><b>hello@carson.kiwi</b></span>
          </div>


          <div className={s.socialLinkPrint}>GitHub https://github.com/Kauabunga</div>
          <div className={s.socialLinkPrint}>Linkedin https://nz.linkedin.com/in/carsonbruce</div>


          <a href='https://github.com/Kauabunga' target='_blank' className={s.socialLink}>
            <amp-img src={require('./github.svg')} height='40px' width='40px' />
          </a>
          <a href='https://nz.linkedin.com/in/carsonbruce' target='_blank' className={s.socialLink}>
            <amp-img src={require('./linkedin.svg')} height='40px' width='40px' />
          </a>

        </div>
      </div>
    );
  }

}

export default withStyles(Footer, s);
