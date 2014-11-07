FindALens.controller('LensController', ['$scope', '$http',
  function($scope, $http) {
    $scope.message = 'This is using the lens Controller';

    $http.get('json/canonLensData.json').success(function(data) {
  		$scope.canonLenses = data;
  	});

    $http.get('json/nikonLensData.json').success(function(data) {
      $scope.nikonLenses = data;
    });

    $scope.orderProp = 'rank';
    $scope.numLimit = 6;


}]);
