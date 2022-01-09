const express = require('express');
// const path = require('path');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (request, response) => {
    const speakers = await speakerService.getList();
    response.json(speakers);

    // Data for dynamic content in ejs
    // response.sendFile(path.join(__dirname, './../static/speakers.html'));
  });

  router.get('/:shortname', (request, response) => {
    response.send(`Detail page of ${request.params.shortname}`);
  });
  return router;
};
