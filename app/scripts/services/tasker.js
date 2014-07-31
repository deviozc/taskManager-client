'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.tasker
 * @description
 * # tasker
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('Tasker', function ($resource, REST_API) {
      return $resource(REST_API.BASE + REST_API.TASKER + '/:id', {id:'@_id'}, {
              update: {method:'PUT', url:REST_API.BASE + REST_API.TASKER},
              search: {method:'GET', url:REST_API.BASE + REST_API.TASKER + '/filter'}
          });
  });
