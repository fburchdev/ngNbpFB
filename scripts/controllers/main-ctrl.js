var app = angular.module('authors',['firebase']);
app.controller('MainCtrl',
    ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {

        var firebaseRef = new Firebase('https://shining-inferno-1424.firebaseio.com/');
        $scope.authors = $firebase(firebaseRef).$asArray();


    }]);