// app/routes.js

var Article = require('./models/article')

module.exports = function(app) {

	// api

        app.get('/api/articles', function(req, res) {
                Article.find({}, 'title hostname cleaned_text', function(err, articles) {
                        if (err) res.send(err);
                        res.json(articles)
                })
        });
	
	// label article?
	//app.post

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
}
