(function () {
  "use strict";
  angular.module('amazonApp')
    .factory('SnowboardsService', function () {
      var snowboards = [
        {
          photo: "../styles/images/ride.jpg",
          board: "Ride",
          price: "400"
        },
        {
          photo: "../styles/images/burton.jpg",
          board: "Burton",
          price: "500"
        },
        {
          photo: "../styles/images/libtech.jpg",
          board: "Lib Tech",
          price: "400"
        },
        {
          photo: "../styles/images/forum.jpg",
          board: "Forum",
          price: "500"
        },
        {
          photo: "../styles/images/ride.jpg",
          board: "Ride",
          price: "400"
        },
        {
          photo: "../styles/images/burton.jpg",
          board: "Burton",
          price: "500"
        },
        {
          photo: "../styles/images/libtech.jpg",
          board: "Lib Tech",
          price: "400"
        },
        {
          photo: "../styles/images/forum.jpg",
          board: "Forum",
          price: "500"
        },
        {
          photo: "../styles/images/ride.jpg",
          board: "Ride",
          price: "400"
        },
        {
          photo: "../styles/images/burton.jpg",
          board: "Burton",
          price: "500"
        },
        {
          photo: "../styles/images/libtech.jpg",
          board: "Lib Tech",
          price: "400"
        },
        {
          photo: "../styles/images/forum.jpg",
          board: "Forum",
          price: "500"
        },
        {
          photo: "../styles/images/libtech.jpg",
          board: "Lib Tech",
          price: "400"
        },
        {
          photo: "../styles/images/forum.jpg",
          board: "Forum",
          price: "500"
        },
        {
          photo: "../styles/images/ride.jpg",
          board: "Ride",
          price: "400"
        },
        {
          photo: "../styles/images/burton.jpg",
          board: "Burton",
          price: "500"
        },
        {
          photo: "../styles/images/libtech.jpg",
          board: "Lib Tech",
          price: "400"
        },
        {
          photo: "../styles/images/forum.jpg",
          board: "Forum",
          price: "500"
        }
      ];

      var Shoppingcart = [];

      var getCart = function() {
        return Shoppingcart;
      };
      var addCart = function(cartItem) {
        Shoppingcart.push(cartItem);
      };
      var getSnowboards = function () {
        return snowboards;
      };
      var addSnowboard = function (board) {
        snowboards.push(board);
      }
      var deleteSnowboard = function (board) {
        var idx = snowboards.indexOf(board);
        snowboards.splice(idx, 1);
        console.log(snowboards);
      };
      var editSnowboard = function (board) {
        SnowboardsService.editBoard(board, $routeParams.boardIndex);
        $location.path('' + $routeParams.boardIndex);
      };

      return {
        getBoards: getSnowboards,
        addBoard: addSnowboard,
        deleteBoard: deleteSnowboard,
        editBoard: editSnowboard,
        getShoppingcart: getCart,
        addCart: addCart
      };
    });

//surf

    angular.module('amazonApp')
      .factory('SurfboardsService', function () {
        var surfboards = [
        {
          photo: "../styles/images/surf1.jpg",
          surf: "Chilli",
          price: "700"
        },
        {
          photo: "../styles/images/surf2.jpg",
          surf: "Channel Island",
          price: "600"
        },
        {
          photo: "../styles/images/surf3.jpg",
          surf: "Lost",
          price: "700"
        },
        {
          photo: "../styles/images/surf4.jpg",
          surf: "Rusty",
          price: "600"
        },
        {
          photo: "../styles/images/surf1.jpg",
          surf: "Chilli",
          price: "700"
        },
        {
          photo: "../styles/images/surf2.jpg",
          surf: "Channel Island",
          price: "600"
        },
        {
          photo: "../styles/images/surf3.jpg",
          surf: "Lost",
          price: "700"
        },
        {
          photo: "../styles/images/surf4.jpg",
          surf: "Rusty",
          price: "600"
        },
        {
          photo: "../styles/images/surf1.jpg",
          surf: "Chilli",
          price: "700"
        },
        {
          photo: "../styles/images/surf2.jpg",
          surf: "Channel Island",
          price: "600"
        },
        {
          photo: "../styles/images/surf3.jpg",
          surf: "Lost",
          price: "700"
        },
        {
          photo: "../styles/images/surf4.jpg",
          surf: "Rusty",
          price: "600"
        },
        {
          photo: "../styles/images/surf1.jpg",
          surf: "Chilli",
          price: "700"
        },
        {
          photo: "../styles/images/surf2.jpg",
          surf: "Channel Island",
          price: "600"
        },
        {
          photo: "../styles/images/surf3.jpg",
          surf: "Lost",
          price: "700"
        },
        {
          photo: "../styles/images/surf4.jpg",
          surf: "Rusty",
          price: "600"
        },
        {
          photo: "../styles/images/surf1.jpg",
          surf: "Chilli",
          price: "700"
        },
        {
          photo: "../styles/images/surf2.jpg",
          surf: "Channel Island",
          price: "600"
        }
      ];

      var getSurfboards = function () {
        return surfboards;
      };
      var addSurfboard = function (surf) {
        surfboards.push(surf);
      }
      var deleteSurfboard = function (surf) {
        var idx = surfboards.indexOf(surf);
        surfboards.splice(idx, 1);
        console.log(surfboards);
      };

      return {
        getSurfs: getSurfboards,
        addSurf: addSurfboard,
        deleteSurf: deleteSurfboard

      };
    });

//sneaks

angular.module('amazonApp')
  .factory('SneakersService', function () {
    var sneakers = [
    {
      photo: "../styles/images/ski1.jpg",
      shoe: "4FRNT",
      price: "200"
    },
    {
      photo: "../styles/images/ski2.jpg",
      shoe: "Atomic",
      price: "300"
    },
    {
      photo: "../styles/images/ski3.jpg",
      shoe: "Salomon",
      price: "200"
    },
    {
      photo: "../styles/images/ski4.jpg",
      shoe: "K2",
      price: "300"
    },
    {
      photo: "../styles/images/ski1.jpg",
      shoe: "4FRNT",
      price: "200"
    },
    {
      photo: "../styles/images/ski2.jpg",
      shoe: "Atomic",
      price: "300"
    },
    {
      photo: "../styles/images/ski3.jpg",
      shoe: "Salomon",
      price: "200"
    },
    {
      photo: "../styles/images/ski4.jpg",
      shoe: "K2",
      price: "300"
    },
    {
      photo: "../styles/images/ski1.jpg",
      shoe: "4FRNT",
      price: "200"
    },
    {
      photo: "../styles/images/ski2.jpg",
      shoe: "Atomic",
      price: "300"
    },
    {
      photo: "../styles/images/ski3.jpg",
      shoe: "Salomon",
      price: "200"
    },
    {
      photo: "../styles/images/ski4.jpg",
      shoe: "K2",
      price: "300"
    },
    {
      photo: "../styles/images/ski1.jpg",
      shoe: "4FRNT",
      price: "200"
    },
    {
      photo: "../styles/images/ski2.jpg",
      shoe: "Atomic",
      price: "300"
    },
    {
      photo: "../styles/images/ski3.jpg",
      shoe: "Salomon",
      price: "200"
    },
    {
      photo: "../styles/images/ski4.jpg",
      shoe: "K2",
      price: "300"
    },
    {
      photo: "../styles/images/ski1.jpg",
      shoe: "4FRNT",
      price: "200"
    },
    {
      photo: "../styles/images/ski2.jpg",
      shoe: "Atomic",
      price: "300"
    }
  ];

  var getSneakers = function () {
    return sneakers;
  };
  var addSneaker = function (shoe) {
    sneakers.push(shoe);
  }
  var deleteSneaker = function (shoe) {
    var idx = sneakers.indexOf(shoe);
    sneakers.splice(idx, 1);
    console.log(sneakers);
  };

  return {
    getShoes: getSneakers,
    addShoe: addSneaker,
    deleteShoe: deleteSneaker

  };
});

})();
