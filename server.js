const express = require('express');
const compression = require('compression');
const app = express();

app.use(express.static(__dirname + '/dist/emielkwakkel'));
app.use(compression());
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/emielkwakkel/index.html');
});

app.listen(process.env.PORT || 4200);
console.log('Server running...');