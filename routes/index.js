const express = require('express');
const spearkerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    /* if (!request.session.visitCount) {
      request.session.visitCount = 0;
    }
    request.session.visitCount += 1;
    console.log(`Visit count: ${request.session.visitCount}`);
    */
    // Data for dynamic content in ejs
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', spearkerRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
