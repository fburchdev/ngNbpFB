angular.module('authors').factory('AuthorsSvc',
    ['$http', function ($http) {
        return {
            authors: function () {
                return $http({method: 'GET', url: 'data/authors.json'});
            }
        }
    }]);