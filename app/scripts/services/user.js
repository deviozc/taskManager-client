'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.user
 * @description
 * # user
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('User', function ($resource, REST_API) {
    return $resource(REST_API.BASE + REST_API.USER);
  });
