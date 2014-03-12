// app/routes.js

var Article = require('./models/article')

module.exports = function(app) {

	// api

        app.get('/api/articles', function(req, res) {
                Article.findOne({}, 'title hostname pubDate cleaned_text', function(err, article) {
                        if (err) res.send(err);
                        res.json(article)
                })
        });

        app.post('/api/articles', function(req, res) {
                Article.create({
                        category: req.body.category,
                        meta_description: req.body.meta_description,
                        meta_keywords: req.body.meta_keywords,
                        pubDate: req.pubDate,
                        title: req.title,
                        hostname: req.hostname,
                        cleaned_text: req.cleaned_text,
                        invalid: req.valid,
                        labels: []
                    },
                    function(err, article) {
                        if (err)
                            res.send(err);

                        Article.findOne(function(err, article) {
                            if (err)
                                res.send(err);
                            res.json(article);
                        })

                });
        });

        app.delete('/api/articles/:article_id', function(req, res) {
            Article.remove({
                _id : req.params.article_id
                }, function(err, article) {
                    if (err)
                        res.send(err);

                    Article.findOne(function(err, article) {
                        if (err)
                            res.send(err);
                        res.json(article);
                    })
                }


            )
        });

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
}
