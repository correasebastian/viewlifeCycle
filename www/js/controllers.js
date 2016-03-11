angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

    /* $scope.$on('$ionicView.loaded', function() {
         console.log(' DashCtrl loaded', $scope, $scope.$id)
     });

     $scope.$on('$ionicView.beforeEnter', function() {
         // Anything you can think of
         console.log(' DashCtrl BeforeEnter', $scope, $scope.$id)
     });
     $scope.$on('$ionicView.enter', function() {
         // Anything you can think of
         console.log(' DashCtrl enter', $scope, $scope.$id)

     });
     $scope.$on('$ionicView.afterEnter', function() {
         console.log(' DashCtrl afterEnter', $scope, $scope.$id)
     });

     $scope.$on('$ionicView.beforeLeave', function() {
         console.log(' DashCtrl beforeLeave', $scope, $scope.$id)
             // Anything you can think of
     });

     $scope.$on('$ionicView.leave', function() {
         console.log(' DashCtrl Leave', $scope, $scope.$id)
     });

     $scope.$on('$ionicView.afterLeave', function() {
         console.log(' DashCtrl afterLeave', $scope, $scope.$id)

     });
     $scope.$on('$ionicView.unloaded', function() {
         console.log(' DashCtrl unloaded', $scope, $scope.$id)
             // Anything you can think of
     });*/

})

.controller('ChatsCtrl', function($scope, Chats) {
    /*$scope.$on('$ionicView.loaded', function() {
        console.log(' ChatsCtrl loaded', $scope, $scope.$id)
    });
    $scope.$on('$ionicView.beforeEnter', function() {
        // Anything you can think of
        console.log(' ChatsCtrl BeforeEnter', $scope, $scope.$id)
    });
    $scope.$on('$ionicView.enter', function() {
        console.log(' ChatsCtrl enter', $scope, $scope.$id)
            // Anything you can think of
    });
    $scope.$on('$ionicView.afterEnter', function() {
        console.log(' ChatsCtrl afterEnter', $scope, $scope.$id)
    });

    $scope.$on('$ionicView.beforeLeave', function() {
        console.log(' ChatsCtrl beforeLeave', $scope, $scope.$id)
            // Anything you can think of
    });
    $scope.$on('$ionicView.leave', function() {
        console.log(' ChatsCtrl Leave', $scope, $scope.$id)
    });

    $scope.$on('$ionicView.afterLeave', function() {
        console.log(' ChatsCtrl afterLeave', $scope, $scope.$id)

    });
    $scope.$on('$ionicView.unloaded', function() {
        console.log(' DashCtrl unloaded', $scope, $scope.$id)
            // Anything you can think of
    });
*/

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    var _str = 'ChatDetailCtrl'
    $scope.chat = Chats.get($stateParams.chatId);
    /* $scope.$on('$ionicView.loaded', function() {
         console.log(_str + ' loaded', $scope, $scope.$id)
     });
     $scope.$on('$ionicView.beforeEnter', function() {
         // Anything you can think of
         console.log(_str + ' BeforeEnter', $scope, $scope.$id)
     });
     $scope.$on('$ionicView.enter', function() {
         console.log(_str + ' enter', $scope, $scope.$id)
             // Anything you can think of
     });
     $scope.$on('$ionicView.afterEnter', function() {
         console.log(_str + ' afterEnter', $scope, $scope.$id)
     });

     $scope.$on('$ionicView.beforeLeave', function() {
         console.log(_str + ' beforeLeave', $scope, $scope.$id)
             // Anything you can think of
     });
     $scope.$on('$ionicView.leave', function() {
         console.log(_str + ' Leave', $scope, $scope.$id)
     });

     $scope.$on('$ionicView.afterLeave', function() {
         console.log(_str + ' afterLeave', $scope, $scope.$id)

     });
     $scope.$on('$ionicView.unloaded', function() {
         console.log(_str + 'unloaded', $scope, $scope.$id)
             // Anything you can think of
     });*/
})

.controller('AccountCtrl', function() {

    var vm = this;
    vm.settings = {
        enableFriends: true
    };
    var _41 = 41;
    vm.setName = setName;
    vm.add41 = add41;


    activate()

    function setName() {
        vm.name = 'pepito';
    }

    function activate() {
        var arrayn = [];
        for (var i = 0; i < 40; i++) {
            var obj = {
                name: i,
            }
            arrayn.push(obj)
        }

        vm.numbers = arrayn;
    }

    function add41() {
        var obj = {
            name: _41,
        }
        _41++;
        vm.numbers.unshift(obj)
    }
});
