const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, './')));
app.use('/build/*', express.static(path.join(__dirname, './build/bundle.js')));

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})