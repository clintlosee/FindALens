'use strict';

var FindALens = angular.module('FindALens', ['ngRoute']);

FindALens.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/one.html',
    controller: 'MainController'
  })
  .when('/two', {
    templateUrl: 'views/two.html',
    controller: 'TwoController'
  })
  .when('/three', {
    templateUrl: 'views/three.html',
    controller: 'ThreeController'
  })
});
