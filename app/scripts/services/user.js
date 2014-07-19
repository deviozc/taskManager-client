'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.user
 * @description
 * # user
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('user', function () {
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
