'use strict';

var FindALens = angular.module('FindALens', ['ngRoute', 'findALensServices']);

FindALens.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/lens/:lensId', {
      templateUrl: 'views/lens-view.html',
      controller: 'LensViewController'
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
    .when('/canon-portrait', {
      templateUrl: 'views/canon-portrait.html',
      controller: 'LensController'
    })
    .when('/canon-sports', {
      templateUrl: 'views/canon-sports.html',
      controller: 'LensController'
    })
    .when('/canon-wildlife', {
      templateUrl: 'views/canon-wildlife.html',
      controller: 'LensController'
    })
    .when('/canon-macro', {
      templateUrl: 'views/canon-macro.html',
      controller: 'LensController'
    })
    .when('/canon-travel', {
      templateUrl: 'views/canon-travel.html',
      controller: 'LensController'
    })
    .when('/nikon-landscape', {
      templateUrl: 'views/nikon-landscape.html',
      controller: 'LensController'
    })
    .when('/nikon-portrait', {
      templateUrl: 'views/nikon-portrait.html',
      controller: 'LensController'
    })
    .when('/nikon-sports', {
      templateUrl: 'views/nikon-sports.html',
      controller: 'LensController'
    })
    .when('/nikon-wildlife', {
      templateUrl: 'views/nikon-wildlife.html',
      controller: 'LensController'
    })
    .when('/nikon-macro', {
      templateUrl: 'views/nikon-macro.html',
      controller: 'LensController'
    })
    .when('/nikon-travel', {
      templateUrl: 'views/nikon-travel.html',
      controller: 'LensController'
    });
}]);
