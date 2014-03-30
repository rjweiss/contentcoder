// js/services/todos.js
angular.module('articleService', [])

    // super simple service
    // each function returns a promise object
    .factory('Articles', function($http) {
        return {
            get : function() {
                return $http.get('/api/article/total');
            },
            get : function() {
                return $http.get('/api/article/total');
            },
            create : function(articleData) {
                return $http.post('/api/article', articleData);
            },
            update : function(articleData) {
                return $http.put('/api/article/' + id, articleData);
            },
            delete : function(id) {
                return $http.delete('/api/article/' + id);
            }
        }
    });