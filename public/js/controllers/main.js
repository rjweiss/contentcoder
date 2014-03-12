// js/controllers/main.js

angular.module('articleController', [])


    .controller('mainController', function($scope, $http, Articles) {
        $scope.formData = {};

        $scope.labelOptions = [
            { label: "label1" },
            { label: "label2" },
            { label: "label3" },
            { label: "label4" },
            { label: "label5" }
        ]

        function updateCounters() {
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
        }

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

        updateCounters();


        $scope.updateArticle = function() {
            $http.post('/api/article/labeler', { _id: $scope.article._id, label: $scope.formData.label })

            $http.get('/api/article')
                .success(function(data) {
                    $scope.article = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

            updateCounters();
        };

        $scope.discardArticle = function() {
            $http.post('/api/article/discard', { _id: $scope.article._id})

            $http.get('/api/article')
                .success(function(data) {
                    $scope.article = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

            updateCounters();
        };

    });

