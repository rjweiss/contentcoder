// js/controllers/main.js

angular.module('articleController', [])

    .controller('mainController', function($scope, $http, Articles) {
        $scope.formData = {};

        // when landing on the page, get all articles and show them
        $http.get('/api/article')
            .success(function(data) {
                $scope.article = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        $http.get('/api/article/totalcount')
            .success(function(data) {
                $scope.totalcount = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        $http.get('/api/article/invalidcount')
            .success(function(data) {
                $scope.invalidcount = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        $http.get('/api/article/labeledcount')
            .success(function(data) {
                $scope.labeledcount = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });


        // when submitting the add form, send the text to the node API
        $scope.updateArticle = function(id) {
            $http.put('/api/article/' + id, $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.articles = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };


    });
