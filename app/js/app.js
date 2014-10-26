'use strict';

var FindALens = angular.module('FindALens', ['ngRoute']);

FindALens.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .when('/canon', {
    templateUrl: 'views/canon.html',
    controller: 'CanonController'
  })
  .when('/nikon', {
    templateUrl: 'views/nikon.html',
    controller: 'NikonController'
  })
  .when('/canon-landscape', {
    templateUrl: 'views/canon-landscape.html',
    controller: 'LensController'
  })
  .when('/nikon-landscape', {
    templateUrl: 'views/nikon-landscape.html',
    controller: 'LensController'
  })
});
