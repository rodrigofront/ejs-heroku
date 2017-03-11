var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'EJS Demo',
    text: 'Um teste de EJS!!'
  });
});

app.listen(process.env.PORT || 5000);
