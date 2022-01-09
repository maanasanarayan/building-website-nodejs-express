const express = require('express');
// const path = require('path');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (request, response) => {
    const feedback = await feedbackService.getList();
    response.json(feedback);

    // Data for dynamic content in ejs
    // response.sendFile(path.join(__dirname, './../static/feedback.html'));
  });

  router.post('/', (request, response) => {
    response.send('Feedback form posted');
  });
  return router;
};
