/* @FINALPROJECTCOMMENT I try to keep the module instantiations in the app.js file, and out of global variables. */
angular.module('authors').controller('MainCtrl',
    ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {

        var firebaseRef = new Firebase('https://shining-inferno-1424.firebaseio.com/');
        $scope.authors = $firebase(firebaseRef).$asArray();

        $scope.setCurrentAuthor = function(author){
            if($scope.isCurrentAuthor(author)){
                $scope.currentAuthor = null;
            }
            else {
                $scope.currentAuthor = author;
            }
        };

        $scope.isCurrentAuthor = function(author){
            return author === $scope.currentAuthor;
        };

        $scope.setCurrentSeries = function(series){
            if($scope.isCurrentSeries(series)){
                $scope.currentSeries = null;
            }
            else{
                $scope.currentSeries = series;
            }
        };

        $scope.isCurrentSeries = function(series){
            return series === $scope.currentSeries;
        };

    }]);
