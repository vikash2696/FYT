// app.js
// load the things we need

var express = require('express');
var app = module.exports = express();

var db = require('./connection');
var appController = require('./controller/appController');
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

// index page 
app.get('/', function(req, res) {
	var title = 'Learning node';
	res.render('pages/index', {
		title : title
	});
});

app.get('/', appController.addAsPlayer);

// about page 
app.get('/login', appController.login);

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/connect', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(8080, function() {
      console.log('Listening on port 8080...')
    })
  }
});
