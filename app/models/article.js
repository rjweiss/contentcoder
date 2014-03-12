// app/models/article.js

	// load mongoose
	var mongoose = require('mongoose')
    var Schema = mongoose.Schema;

    var ArticleSchema = new Schema({
        category: String,
        meta_description: String,
        meta_keywords: String,
        pubDate: String,
        title: String,
        hostname: String,
        cleaned_text: String,
        invalid: String,
        labels: [{
            label: String,
            user: String,
            seen: {type: Boolean, default: false},
            _timestamp: Date,
            _version: Number
        }]

    });

	module.exports = mongoose.model('Article', ArticleSchema);

