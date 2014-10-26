FindALens.controller('LensController', ['$scope', '$http',
  function($scope, $http) {
    $scope.message = 'This is using the lens Controller';

    $http.get('json/canonLensData.json').success(function(data) {
  		$scope.canonLenses = data;
  	});

    $http.get('json/nikonLensData.json').success(function(data) {
      $scope.nikonLenses = data;
    });

    $scope.numLimit = 6;
    $scope.orderProp = 'rank';
    $scope.filterByLandscape = 'Landscape';
    $scope.filterByPortrait = 'Portrait';
    $scope.filterByBestUse = 'bestUse';
}]);
