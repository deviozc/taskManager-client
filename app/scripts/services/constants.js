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
        'BASE':'http://localhost:3000/',
        'USER': 'user',
        'AUTH': 'session',
        'TASK': 'task',
      	'TASKER': 'tasker',
        'CATEGORY': 'category'
    });
