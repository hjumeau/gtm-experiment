var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 5000);

app.use('/vendor', express.static(__dirname + '/vendor'));
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Load API stub routes
var api = require('./api-stub/routes');
console.log('Using API Stub');

app.get('/',function(req, res) {
  res.render('index.html');
});

app.use('/api', api);

// spin up server
app.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});