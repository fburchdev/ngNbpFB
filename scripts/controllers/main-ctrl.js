angular.module('authors').controller('MainCtrl',
    ['$scope', '$http', 'AuthorsSvc', function ($scope, $http, authorsSvc) {

        //$scope.authors = [];
        //$scope.loadAuthors = function () {
          //  authorsSvc.authors().then(function (result) {
            //    $scope.authors = result.data;
         //   });
        //};

        authorsSvc.authors().then(function (result) {
          $scope.authors = result.data;
         });


    }]);