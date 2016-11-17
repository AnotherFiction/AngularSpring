'use strict';

myApp.controller('UsersController', ['$scope', 'User', function ($scope, User) {
    $scope.users = User.query({});
}]);