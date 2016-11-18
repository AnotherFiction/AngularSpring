'use strict';

myApp.controller('UsersController', ['$scope', 'User', function ($scope, User) {
    $scope.users = User.query({});
    $scope.sortByProperty = 'dateOfBirth';
    
    $scope.sortBy = function(item){
        return item[$scope.sortByProperty];
    };

    $scope.sort = function(property){
        $scope.sortByProperty = property;
    };
}]);