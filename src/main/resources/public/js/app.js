'use strict';

var myApp = angular.module('myApp',
    [
        'ngResource',
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'js/views/users/_index.html',
                controller: 'UsersController'
            })
            .when('/users/new', {
                templateUrl: 'js/views/users/_new.html',
                controller: 'NewUsersController'
            })
            .when('/users/:id/edit', {
                templateUrl: 'js/views/users/_edit.html',
                controller: 'EditUsersController',
                resolve: {
                    user: function( $route, User) {
                        var id = $route.current.params.id;
                        return User.get({user_id: id});
                    }
                }
            })
            .otherwise(
                {
                    redirectTo: '/users',
                    controller: 'UsersController'
                });
    }])
    .run(function () {
    });