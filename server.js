var express = require ('express');
var app = express();

// set port
app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
  // create an object and populate it with the desired info
  var info = {
    'ip' : req.headers["x-forwarded-for"],
    'language' : req.headers["accept-language"].split(',')[0],
    'software' : req.headers["user-agent"].split('(')[1].split(')')[0],
  };
  
  // print it on screen.
  res.json(info);
  
  // to see the complete req.header object
  // console.log(req.headers);
});

app.listen(app.get('port'), function () {
  console.log(`Server listening on port ${app.get('port')}`);
});