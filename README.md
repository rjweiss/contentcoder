ContentCoder
============

This is a very simple MEAN web application to code content for training and evaluating classifiers.  You can see a working demo of this application at [http://contentcoder.herokuapp.com](http://contentcoder.herokuapp.com/).

This application was designed with labeling news articles in mind.  This can be extended in the future to other text domains.

## File structure

* /public/ (contains all front-end angular code)
  * js/core.js (main module for application)
  * js/controllers/main.js (currently only one controller for this app)
  * js/services/articles.js (angular services that interface with Node API)
* /app/ (contains all node components (e.g. models, routes))
  * routes.js (defines Node API) 
* server.js (node.js application configuration (this is what you run))
* package.json

## Features to implement:

* User-facing features
  * Authentication using passport.js.
  * Second-stage labeling
    * The current application only allows for document-level annotations.  The next step planned is to label a random subset of sentences for sentence-level annotations.
* Administration view
  * Create a new content coding project
    * Interface to write coding codebook and instructions for users
    * Coding task templating (design a few example task templates and allow users to select which template matches the project)
    * Upload text data for labeling
  * Managing a content coding project
    * Adding and removing users
    * Starting and stopping a project
  * Project metrics
    * Inter-coder reliability 
    * Status on project completion?
    * Average ratings?
