// js/services/todos.js
angular.module('articleService', [])

    // super simple service
    // each function returns a promise object
    .factory('Articles', function($http) {
        return {
            get : function() {
                return $http.get('/api/articles');
            },
            create : function(articleData) {
                return $http.post('/api/articles', articleData);
            },
            update : function(articleData) {
                return $http.put('/api/articles/' + id, articleData);
            },
            delete : function(id) {
                return $http.delete('/api/articles/' + id);
            }
        }
    });