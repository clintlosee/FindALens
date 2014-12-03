FindALens.controller('LensController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.message = 'This is using the lens Controller';
    $scope.landscapeMsg = 'Landscape Lenses';
    $scope.portraitMsg = 'Portrait Lenses';
    $scope.sportsMsg = 'Sports Lenses';
    $scope.wildlifeMsg = 'Wildlife Lenses';
    $scope.macroMsg = 'Macro Lenses';
    $scope.travelMsg = 'Travel Lenses';

    $http.get('json/canonLensData.json').success(function(data) {
  		$scope.canonLenses = data;
  	});

    $http.get('json/nikonLensData.json').success(function(data) {
      $scope.nikonLenses = data;
    });

    $scope.orderProp = 'rank';
    $scope.numLimit = 6;

    $scope.lensId = $routeParams.lensId;
}]);
