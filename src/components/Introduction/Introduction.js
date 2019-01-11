/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Introduction.scss";

const text = `
  I plan and deliver throughout a products development process.

  I have experienced a range of teams, roles, and achievements.

`;

const text2 = `

  My key attributes include: problem solving, passion to learn and share, open mindedness, and being a team player.

`;

const text3 = `

  I am at home when working and sharing Javascript.

`;

const text4 = "";

// const text3 = `

//   I am an early adopter of Fullstack Javascript,
//   embracing a shift towards simpler and more agile systems and processes.

// `;

// const text4 = `

//   I am at home when working and sharing Javascript.

// `;

class Introduction extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.firstSentence}>
          <b className={s.blue}>
            I am passionate about creating simple and beautiful&nbsp;apps.
          </b>
        </div>
        <div className={s.content}>{text}</div>
        <div className={s.content}>{text2}</div>
        <div className={s.content}>{text3}</div>
        <div className={s.content}>{text4}</div>
        <div className={s.content}>
          Get in touch at
          <a href="mailto:hello@carson.kiwi" className={s.introLink}>
            <b className={s.blue}>&nbsp;hello@carson.kiwi</b>
          </a>
        </div>
        <div style={{ display: "block", height: 72 }} />
      </div>
    );
  }
}

export default withStyles(Introduction, s);
