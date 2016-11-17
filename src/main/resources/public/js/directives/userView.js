'use strict';

myApp.directive('userView', function () {
    return {
        restrict: 'AEC',
        scope: {
            user: '='
        },
        templateUrl: 'js/views/users/_show.html',
        controller: ['$scope', '$route', '$location', 'User',
            function UsersListController($scope, $route, $location, User) {
                $scope.destroy = function () {
                    User.remove({user_id: $scope.user.id}, function (succ) {
                        $route.reload();
                    }, function (err) {
                        console.log(err);
                    });
                };

                $scope.edit = function () {
                    $location.path('/users/' + $scope.user.id + '/edit');
                };
            }]
    };
});
