'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.task
 * @description
 * # task
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('Task', function ($resource, REST_API) {
    return $resource(REST_API.BASE + REST_API.TASK);
  });
