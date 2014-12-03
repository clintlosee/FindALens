FindALens.controller('LensViewController', ['$scope', 'CanonLens', '$routeParams',
  function($scope, CanonLens, $routeParams) {
    $scope.lensId = $routeParams.lensId;

    $scope.indLens = CanonLens.get({lensId: $routeParams.lensId});

}]);
