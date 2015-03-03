(function () {
  "use strict";
//snow
  angular.module('amazonApp')
    .controller('SnowController', function (SnowboardsService, $scope) {
        var mainCtrl = this;

        mainCtrl.snowboards = SnowboardsService.getBoards();

        mainCtrl.addSnowboard = function (newBoard) {
          SnowboardsService.addBoard(newBoard);
          $scope.newBoard = {};
        };

    });

//surf
angular.module('amazonApp')
.controller('SurfController', function (SurfboardsService, $scope) {
    var mainCtrl = this;

    mainCtrl.surfboards = SurfboardsService.getSurfs();


    mainCtrl.addSurfboard = function (newSurf) {
      SurfboardsService.addSurf(newSurf);
      $scope.newSurf = {};
    };

});

//sneaks
angular.module('amazonApp')
.controller('SneaksController', function (SneakersService, $scope) {
    var mainCtrl = this;

    mainCtrl.sneakers = SneakersService.getShoes();


    mainCtrl.addSneaker = function (newShoe) {
      SneakersService.addShoe(newShoe);
      $scope.newShoe = {};
    };

});

//admin
angular.module('amazonApp')
.controller('AdminController', function (SnowboardsService, SurfboardsService, SneakersService, $location, $scope) {
    var adminCtrl = this;

    adminCtrl.snowboards = SnowboardsService.getBoards();
    adminCtrl.addSnowboard = function (newSurf) {
      SnowboardsService.addBoard(newBoard);
      $scope.newBoard = {};
    };
    adminCtrl.surfboards = SurfboardsService.getSurfs();
    adminCtrl.addSurfboard = function (newSurf) {
      SurfboardsService.addSurf(newSurf);
      $scope.newSurf = {};
    };
    adminCtrl.sneakers = SneakersService.getShoes();
    adminCtrl.addSneaker = function (newShoe) {
      SneakersService.addShoe(newShoe);
      $scope.newShoe = {};
    };

    adminCtrl.login = function (username) {
      if(username === 'rachAdmin') {
        $location.path('/admin');
        alert("Welcome Administrator!");
      } else {
        alert("Incorrect admin username, please try again.");
      }
    };

  });

})();
