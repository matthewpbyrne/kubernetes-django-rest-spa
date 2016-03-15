'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'base64',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular
  .module('myAppApp')
  .factory('MyRestangular', function($base64, Restangular) {

      var encoded = $base64.encode("matthewbyrne:password16");

      return Restangular.withConfig(function(RestangularConfigurer) {
          function listExtractor(data, operation, what, url, response, deferred) {
              var extractedData;
              if (data.hasOwnProperty('results')) {
                  extractedData = data.results;
              } else {
                  extractedData = data;
              }
              return extractedData;
          }

          // var baseUrl = "http://192.168.99.100";
          var baseUrl = "http://52.31.87.146";
          RestangularConfigurer.setBaseUrl(baseUrl + ':31000');
          RestangularConfigurer.setDefaultHeaders({ Authorization: 'Basic ' + encoded });
          RestangularConfigurer.addResponseInterceptor(listExtractor);
      });
  });
