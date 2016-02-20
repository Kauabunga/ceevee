/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import fs from 'fs';
import { join } from 'path';
import { Router } from 'express';
import Promise from 'bluebird';
import pdf from 'html-pdf';
import request from 'request-promise';

const router = new Router();

const getHtml = () => {
  return request(`http://localhost:3000/`);
}

const getPdfFromHtml = html => new Promise((success, failure) => {
  return pdf.create(html).toFile('./cv.pdf', function(err, res){
    if(err){
      return failure(err);
    }
    else {
      return success(res);
    }
  });
})


router.get('/', async (req, res, next) => {
  try {

    const html = await getHtml();
    const pdf = await getPdfFromHtml(html);

    res.status(200).send(pdf);

  } catch (err) {
    next(err);
  }
});

export default router;
