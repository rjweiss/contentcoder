// app/models/article.js

	// load mongoose
	var mongoose = require('mongoose')

	module.exports = mongoose.model('Articles', {
        	category: String,
       		meta_description: String,
        	meta_keywords: String,
        	pubDate: String,
        	title: String,
        	hostname: String,
        	cleaned_text: String
	});

