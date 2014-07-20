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
    var _init = function () {
        return $resource(REST_API.BASE + REST_API.AUTH);
    },
        _isLoggedIn = function () {
            return isLoggedInFlag;
        },
        _setLoggedIn = function (flag) {
            isLoggedInFlag = flag;
            if( !! flag) {
                toaster.pop('success', 'Successfully logged in.');
                $rootScope.$broadcast('logged_in');
            } else {
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