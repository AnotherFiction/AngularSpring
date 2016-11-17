'use strict';

myApp.directive('usersList', function () {
    return {
        restrict: 'AEC',
        scope: {
            users: '='
        },
        templateUrl: 'js/views/users/_index.html',
        controller: ['$scope', function UsersListController($scope) {
        }]
    };
});
