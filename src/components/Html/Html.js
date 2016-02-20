/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { googleAnalyticsId } from '../../config';


var analyticsConfig = {
  "vars": {
    "account": "UA-74078643-1"
  },
  "triggers": {
    "trackPageview": {  // Trigger names can be any string. trackPageview is not a required name.
      "on": "visible",
      "request": "pageview"
    }
  }
};

class Analytics extends Component {
  renderRawMarkup(){
    return JSON.stringify(analyticsConfig).replace(/&quot;/g, '"');
  }
  render(){
    return (
      <amp-analytics type="googleanalytics" id="analytics1">
        <script type="application/json" dangerouslySetInnerHTML={{__html: this.renderRawMarkup()}}></script>
      </amp-analytics>

    )
  }
}

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
  };


  render() {
    return (
      <html is="remove-this-is" amp="" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <link rel="canonical" href="http://www.carson.kiwi/" />
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <meta name="theme-color" content="#3F51B5"></meta>

        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style id="css" is="remove-this-is" amp-custom="" dangerouslySetInnerHTML={{ __html: this.props.css }} />

        <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css' />



      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <Analytics />
      </body>
      </html>
    );
  }

  //<script async src={this.props.entry}></script>

  //<script src={this.props.entry}></script>

}

export default Html;
