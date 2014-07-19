'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.task
 * @description
 * # task
 * Factory in the appointmeApp.
 */
angular.module('appointmeApp')
  .factory('task', function () {
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
