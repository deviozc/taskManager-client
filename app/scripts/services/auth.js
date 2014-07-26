'use strict';
/**
 * @ngdoc service
 * @name appointmeApp.auth
 * @description
 * # auth
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp').factory('Auth', function ($resource, REST_API, toaster, $rootScope) {
    var isLoggedInFlag = false;
    var userInfo = {};
    var _init = function () {
        return $resource(REST_API.BASE + REST_API.AUTH);
    },
        _isLoggedIn = function () {
            return isLoggedInFlag;
        },
        _setLoggedIn = function (flag, user) {
            isLoggedInFlag = flag;
            if( !! flag) {
                userInfo = user;
                toaster.pop('success', 'Successfully logged in.');
                $rootScope.$broadcast('logged_in');
            } else {
                userInfo = {};
                toaster.pop('success', 'Successfully logged out.');
                $rootScope.$broadcast('logged_out');
            }
        };
    return {
        init: _init,
        isLoggedIn: _isLoggedIn,
        setLoggedIn: _setLoggedIn
    };
});