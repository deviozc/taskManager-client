'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.category
 * @description
 * # category
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('category', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
