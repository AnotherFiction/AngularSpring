'use strict';

myApp.controller('EditUsersController',
    ['$scope', '$location', 'User', 'user', function ($scope, $location, User, user) {
        user.$promise.then(function(result) {
            $scope.user = result;
            $scope.user.dateOfBirth = new Date(result.dateOfBirth);
        });

        $scope.update = function () {
            User.save({user_id: $scope.user.id}, $scope.user, function (result) {
                $location.path('/users');
            }, function (error) {
                //XXX: error.data.error is not human readable, it is some cryptic exception returned from spring data
                $scope.alert = "Bad request! Check required parameters";
                console.log(error.data.error);
            })
        };

        $scope.closeAlert = function() {
            $scope.alert = null;
        }
    }]);