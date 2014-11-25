FindALens.controller('LensViewController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.lensId = $routeParams.lensId;


    $http.get('json/' + $routeParams.lensId + '.json').success(function(data) {
      $scope.lens = data;
    });


}]);
