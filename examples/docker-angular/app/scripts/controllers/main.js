'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function (MyRestangular) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    MyRestangular.all('users/').getList()
      .then(function (data) {
          var user = data[0];
          console.info(user.email, user.username, user.url, user.groups);
      });

  });
