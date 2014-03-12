// app/routes.js

var Article = require('./models/article')

module.exports = function (app) {

    // api
    app.get('/api/article', function (req, res) {
        Article.findOneAndUpdate({'labels.0': {$exists:false}}, {'labels.0.shown':true}, 'title hostname pubDate cleaned_text', function (err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('/api/article/totalcount', function (req, res) {
        Article.count({}, function (err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('/api/article/invalidcount', function (req, res) {
        Article.count({'invalid': true}, function (err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('/api/article/labeledcount', function (req, res) {
        Article.count({'labels.0.label': {$exists:true}}, function (err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    });
}
