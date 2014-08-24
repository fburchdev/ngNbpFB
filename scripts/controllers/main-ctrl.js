var app = angular.module('authors',['firebase']);
app.controller('MainCtrl',
    ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {

        var firebaseRef = new Firebase('https://shining-inferno-1424.firebaseio.com/');
        $scope.authors = $firebase(firebaseRef).$asArray();

        $scope.setCurrentAuthor = function(author){
            $scope.currentAuthor = author;
        };

        $scope.isCurrentAuthor = function(author){
            return author === $scope.currentAuthor;
        };

        $scope.setCurrentSeries = function(series){
            $scope.currentSeries = series;
        };

        $scope.isCurrentSeries = function(series){
            return series === $scope.currentSeries;
        };

    }]);
