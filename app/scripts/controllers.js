FindALens.controller('CanonController', function($scope) {
  $scope.message = 'This is the Canon Controller';
});

FindALens.controller('HomeController', function($scope) {
  $scope.message = 'Choose your Camera';
});

FindALens.controller('LensController', ['$scope', 'CanonLens', 'NikonLens', '$routeParams',
  function($scope, CanonLens, NikonLens, $routeParams) {
    $scope.message = 'This is using the lens Controller';
    $scope.landscapeMsg = 'Landscape Lenses';
    $scope.portraitMsg = 'Portrait Lenses';
    $scope.sportsMsg = 'Sports Lenses';
    $scope.wildlifeMsg = 'Wildlife Lenses';
    $scope.macroMsg = 'Macro Lenses';
    $scope.travelMsg = 'Travel Lenses';

     $scope.canonLenses = CanonLens.query();
     $scope.nikonLenses = NikonLens.query();

    $scope.orderProp = 'rank';
    $scope.numLimit = 6;

    $scope.lensId = $routeParams.lensId;
}]);

FindALens.controller('LensViewController', ['$scope', 'CanonLens', '$routeParams',
  function($scope, CanonLens, $routeParams) {
    $scope.lensId = $routeParams.lensId;

    $scope.indLens = CanonLens.get({lensId: $routeParams.lensId});

}]);

FindALens.controller('MainController', function($scope) {
  $scope.message = 'Main Controller';
});

FindALens.controller('NikonController', function($scope) {
  $scope.message = 'Nikon Controller';
});
