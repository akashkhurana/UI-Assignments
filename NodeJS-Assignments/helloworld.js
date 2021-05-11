var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});