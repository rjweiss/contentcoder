// server.js

// set up ========================
var express  = require('express');
var app      = express(); 							// create our app w/ express
var mongoose = require('mongoose'); 						// mongoose for mongodb

// configuration =================

//mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu'); 	// connect to mongoDB database on modulus.io
//mongoose.connect('mongodb://localhost:27017/todo');
mongoose.connect('mongodb://ec2-107-20-239-226.compute-1.amazonaws.com:27017/test');

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 			// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// define model =================
var Document = mongoose.model("Documents", {
  url : String,
	text : String
});

var Article = mongoose.model("Articles", {
	category: String,
	meta_description: String,
	meta_keywords: String,
	pubDate: String,
	title: String,
	hostname: String,
	cleaned_text: String
});

var Todo = mongoose.model('Todo', {
	text : String
});

// routes ======================================================================

	app.get('/api/documents', function(req, res) {
		Document.find(function(err, documents) {
      if (err) res.send(err);
      res.json(documents);
    });
	});

	app.post('/api/documents', function(req, res) {
		console.log(req);
	});

	app.get('/api/articles', function(req, res) {
		Article.find({}, 'title hostname cleaned_text', function(err, articles) {
			if (err) res.send(err);
			res.json(articles)
		})
	});

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});


// listen (start app with node server.js) ======================================
var port = process.env.PORT || 3000;
	app.listen(port);

console.log("App listening on port" + port.toString());
