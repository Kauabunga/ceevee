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
import s from './Education.scss';


const education = {
  year: '2007-2012',
  title: `Victoria University of Wellington`,
  university: `Bachelor of Engineering (BE), Software Engineering, First Class Honours`
};



class Education extends Component {

  render() {
    return (
      <div className={s.educationContent}>
        <div className={s.root}>
          <h1>Education</h1>

          <div className={s.educationContainer}>
            <h2 className={s.content}>{education.university}</h2>
            <h3 className={s.content}>{education.title}</h3>
            <em className={s.content}>{education.year}</em>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Education, s);
