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
