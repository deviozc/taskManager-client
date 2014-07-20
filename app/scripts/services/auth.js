'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.auth
 * @description
 * # auth
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('Auth', function ($resource, REST_API) {
    return $resource(REST_API.BASE + REST_API.AUTH);
  });
