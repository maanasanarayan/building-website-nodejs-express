/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Setting the template engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Setting a middleware - to let express search this folder to find any request for styling
app.use(express.static(path.join(__dirname, './static')));

// Getting routes
app.get('/', (request, response) => {
  // response.send("Hello Express! :)");

  // Loading static content
  // response.sendFile(path.join(__dirname, './static/index.html'));

  // Data for dynamic content in ejs
  response.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (request, response) => {
  // response.send("Hello Express! :)");
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

// Listening to the port
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
