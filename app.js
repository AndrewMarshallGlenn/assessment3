var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var heroRoutes = require('./routes/heroRoutes');
var powerRoutes = require('./routes/powerRoutes');



app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function(){
  console.log('listening on port: ', app.get('port'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.use('/heroRoutes', heroRoutes);
app.use('/powerRoutes', powerRoutes);



module.exports = app;