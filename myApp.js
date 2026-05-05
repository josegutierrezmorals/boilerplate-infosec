const express = require('express');
const app = express();
const helmet = require('helmet');

// 1. Ocultar Express
app.use(helmet.hidePoweredBy());

// 2. Mitigar Clickjacking
app.use(helmet.frameguard({ action: 'deny' }));

app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const api = require('./server.js');
app.use('/_api', api);
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
module.exports = app;