const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/emielkwakkel'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/emielkwakkel/index.html');
});

app.listen(process.env.PORT || 4200);
console.log('Server running...');