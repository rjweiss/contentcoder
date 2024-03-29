// app/routes.js

var Article = require('./models/article')

module.exports = function (app) {

    // api

    app.post('/api/article/skip', function(req, res) {
        var formData = req.body;
        Article.findOneAndUpdate({'_id': formData['_id']}, {'valid': false}, function(err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    })

    app.post('/api/article/labeler', function (req, res) {
        var formData = req.body;
        var labelData = {
            'label':        formData['label'],
            '_timestamp':   Date.now(),
            'user':         "test"
        };
        Article.findOneAndUpdate({'_id': formData['_id']}, {'labels': labelData}, function(err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('/api/article', function (req, res) {
        Article.findOne({'$and': [{'labels': null}, {'valid': {'$ne': false}}]}, 'title hostname pubDate cleaned_text', function (err, article) {
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
        Article.count({'valid': false}, function (err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('/api/article/labeledcount', function (req, res) {
        Article.count({'labels': {$ne:null}}, function (err, article) {
            if (err) res.send(err);
            res.json(article)
        })
    });

    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    });



}
