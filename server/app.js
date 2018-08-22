const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  const agent = req.headers['user-agent'];
  console.log(agent);
  return res.send({ agent });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('app start!');
});
