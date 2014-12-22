FindALens.controller('HomeController', function($scope, $routeParams, CanonLens, NikonLens) {
  $scope.message = 'Welcome to Find-A-Lens';
    $scope.pageClass = 'page-home';

  $scope.canonLenses = CanonLens.query();
  $scope.nikonLenses = NikonLens.query();

  $scope.lensId = $routeParams.lensId;

});
