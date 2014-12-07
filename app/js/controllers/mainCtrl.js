FindALens.controller('MainCtrl', function($scope, ngDialog) {

  // Modal login function
  $scope.clickToOpen = function () {
    ngDialog.open({ template: 'views/login.html' });
  };

});
