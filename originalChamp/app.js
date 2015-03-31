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
        templateUrl: 'views/snow.html',
        controller: 'SnowController as mainCtrl'
      })
      .when('/surf', {
        templateUrl: 'views/surf.html',
        controller: 'SurfController as mainCtrl'
      })
      .when('/sneaks', {
        templateUrl: 'views/sneaks.html',
        controller: 'SneaksController as mainCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'SnowController as mainCtrl'
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
