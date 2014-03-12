// js/controllers/main.js

angular.module('articleController', [])

    .controller('mainController', function($scope, $http, Articles) {
        $scope.formData = {};

        // when landing on the page, get all articles and show them
        $http.get('/api/articles')
            .success(function(data) {
                $scope.articles = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        // when submitting the add form, send the text to the node API
        $scope.createArticle = function() {
            $http.post('/api/articles', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.articles = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

        // when submitting the add form, send the text to the node API
        $scope.updateArticle = function(id) {
            $http.put('/api/articles' + id, $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.articles = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };


        // delete an article after checking it
        $scope.deleteArticle = function(id) {
            $http.delete('/api/articles/' + id)
                .success(function(data) {
                    $scope.todos = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

    });
