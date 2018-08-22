const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  return res.send('test!');
});

app.listen(3000, () => {
  console.log('app start!');
});
