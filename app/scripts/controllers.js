FindALens.controller('CanonController', function($scope) {
  $scope.message = 'This is the Canon Controller';
});

FindALens.controller('HomeController', function($scope) {
  $scope.message = 'Choose your Camera';
});

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

    $scope.filterByLandscape = 'Landscape';
    $scope.filterByPortrait = 'Portrait';
    $scope.filterByBestUse = 'bestUse';
}]);

FindALens.controller('MainController', function($scope) {
  $scope.message = 'Main Controller';
});

FindALens.controller('NikonController', function($scope) {
  $scope.message = 'Nikon Controller';
});
