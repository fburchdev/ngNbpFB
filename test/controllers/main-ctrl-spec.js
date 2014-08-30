'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('authors'));

    var controller,
        $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('MainCtrl', {
            $scope: $scope
        });
    }));

    describe("isCurrentAuthor", function () {

        it("Should define a function called isCurrentAuthor", function () {
            expect(typeof $scope.isCurrentAuthor === 'function').toBeTruthy();
        });

        it("Should return false if the author passed in is not the same as the $scope.currentAuthor", function () {
            $scope.currentAuthor = {name: "Hemingway"};
            expect($scope.isCurrentAuthor({name: "Tolkien"})).toBeFalsy();
        });

        it("Should return true if the author passed in is the sasme as the $scope.currentAuthor", function () {
            var myAuthor = {name: "Hemingway", age: 78};
            $scope.currentAuthor = myAuthor;
            expect($scope.isCurrentAuthor(myAuthor)).toBeTruthy();
        });

    });
});