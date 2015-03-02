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

      var getSnowboards = function () {
        return snowboards;
      };
      var addSnowboard = function (board) {
        snowboards.push(board);
      }

      return {
        getBoards: getSnowboards,
        addBoard: addSnowboard
      };
    });

//surf

    angular.module('amazonApp')
      .factory('SurfboardsService', function () {
        var surfboards = [
        {
          photo: "../styles/images/surf1.jpg",
          surf: "NKB Quest",
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
          surf: "NKB Quest",
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
          surf: "NKB Quest",
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
          surf: "NKB Quest",
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
          surf: "NKB Quest",
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

      return {
        getSurfs: getSurfboards,
        addSurf: addSurfboard
      };
    });

//sneaks

angular.module('amazonApp')
  .factory('SneakersService', function () {
    var sneakers = [
    {
      photo: "../styles/images/sneaks1.jpg",
      shoe: "Brooks",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks2.jpg",
      shoe: "Nike",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks3.jpg",
      shoe: "Merrils",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks4.jpg",
      shoe: "Teneya",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks1.jpg",
      shoe: "Brooks",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks2.jpg",
      shoe: "Nike",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks3.jpg",
      shoe: "Merrils",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks4.jpg",
      shoe: "Teneya",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks1.jpg",
      shoe: "Brooks",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks2.jpg",
      shoe: "Nike",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks3.jpg",
      shoe: "Merrils",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks4.jpg",
      shoe: "Teneya",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks1.jpg",
      shoe: "Brooks",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks2.jpg",
      shoe: "Nike",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks3.jpg",
      shoe: "Merrils",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks4.jpg",
      shoe: "Teneya",
      price: "70"
    },
    {
      photo: "../styles/images/sneaks3.jpg",
      shoe: "Merrils",
      price: "80"
    },
    {
      photo: "../styles/images/sneaks4.jpg",
      shoe: "Teneya",
      price: "70"
    }
  ];

  var getSneakers = function () {
    return sneakers;
  };
  var addSneaker = function (shoe) {
    sneakers.push(shoe);
  }

  return {
    getShoes: getSneakers,
    addShoe: addSneaker
  };
});

})();
