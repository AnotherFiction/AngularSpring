'use strict';

myApp.factory('User', ['$resource', '$rootScope',
    function ($resource, $rootScope) {
        var User = $resource('/api/users/:user_id', {}, {});

        return User;
    }
]);
