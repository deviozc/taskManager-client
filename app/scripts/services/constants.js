'use strict';

/**
 * @ngdoc service
 * @name appointmeApp.constants
 * @description
 * # constants
 * Constant in the appointmeApp.
 */
angular.module('appointmeApp')
  .constant('REST_API', {
        'BASE':'http://egging-bavius.codio.io:3000/',
        'USER': 'user',
        'AUTH': 'session',
        'TASK': 'task',
        'CATEGORY': 'category'
    });
