'use strict';

myApp.controller('NewUsersController',
    ['$scope', '$location', 'User', function ($scope, $location, User) {
        $scope.user = {
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: new Date()
        };

        $scope.create = function () {
            User.save($scope.user, function (result) {
                $location.path('/users');
            }, function (error) {
                //XXX: error.data.error is not human readable, it is some nonsensical exception returned from spring data
                $scope.alert = "Bad request! Check required parameters";
                console.log(error.data.error);
            })
        };

        $scope.closeAlert = function(){
          $scope.alert = null;
        }
    }]);