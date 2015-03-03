(function () {
  "use strict";

  angular.module('amazonApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/snow', {
        templateUrl: 'views/main.html',
        controller: 'SnowController as mainCtrl'
      })
      .when('/surf', {
        templateUrl: 'views/main.html',
        controller: 'SurfController as mainCtrl'
      })
      .when('/sneaks', {
        templateUrl: 'views/main.html',
        controller: 'SneaksController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/not-found', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });




})();


// IIFE - Immediately Invoked Function Execution

// (function() {})();
