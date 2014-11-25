FindALens.controller('CanonController', function($scope) {
  $scope.message = 'This is the Canon Controller';
});

FindALens.controller('HomeController', function($scope) {
  $scope.message = 'Choose your Camera';
});

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

FindALens.controller('LensViewController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.lensId = $routeParams.lensId;


    $http.get('json/' + $routeParams.lensId + '.json').success(function(data) {
      $scope.lens = data;
    });


}]);

FindALens.controller('MainController', function($scope) {
  $scope.message = 'Main Controller';
});

FindALens.controller('NikonController', function($scope) {
  $scope.message = 'Nikon Controller';
});
