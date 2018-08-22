const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  console.log(req.headers['user-agent']);
  return res.send('test!');
});

app.listen(3000, () => {
  console.log('app start!');
});
