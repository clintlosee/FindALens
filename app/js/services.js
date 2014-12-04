'use strict';

var findALensServices = angular.module('findALensServices', ['ngResource']);

findALensServices.factory('CanonLens', ['$resource',
     function($resource){
          return $resource('json/:lensId.json', {}, {
          query: {method:'GET', params:{lensId:'canonLensData'}, isArray:true}
     });
}]);

findALensServices.factory('NikonLens', ['$resource',
     function($resource){
          return $resource('json/:lensId.json', {}, {
          query: {method:'GET', params:{lensId:'nikonLensData'}, isArray:true}
     });
}]);
