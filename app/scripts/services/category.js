'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.category
 * @description
 * # category
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('Category', function ($resource, REST_API) {
      return $resource(REST_API.BASE + REST_API.CATEGORY + '/:id', {id:'@_id'});
  });
