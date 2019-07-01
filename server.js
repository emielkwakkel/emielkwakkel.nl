const express = require('express');
const compression = require('compression');
const app = express();

const forceSsl = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

app.configure(() => {
  if (process.env.NODE_ENV === 'production') {
    console.log('Production environment');
    app.use(forceSsl);
  }
});

app.use(express.static(__dirname + '/dist/emielkwakkel'));
app.use(compression());
app.get('/*', (req, res) =>{
  res.sendFile(__dirname + '/dist/emielkwakkel/index.html');
});

app.listen(process.env.PORT || 4200);
console.log('Server running...');