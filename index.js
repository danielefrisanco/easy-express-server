var express = require('express');
var app = express();

app.post('/api', function(req,res){
  console.log('asfsdfsf');
  console.log(req.headers.result);
  res.send('ciao');
});

app.listen(12345);
