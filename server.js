const express = require('express');
const compression = require('compression');
const app = express();

const forceSsl = (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') return;
  console.log('Production environment');

  if (req.headers['x-forwarded-proto'] !== 'https')
    return res.redirect(['https://', req.get('Host'), req.url].join(''));

  return next();
};

app.use(express.static(__dirname + '/dist/emielkwakkel'));
app.use(compression());
app.use(forceSsl);
app.get('/*', (req, res) =>{
  res.sendFile(__dirname + '/dist/emielkwakkel/index.html');
});

app.listen(process.env.PORT || 4200);
console.log('Server running...');