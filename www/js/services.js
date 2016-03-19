angular.module('starter.services', [])

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});


angular.module('starter.directives', [])
    .directive('lifeCycle', lifeCycle);

lifeCycle.$inject = ['$stateParams', '$timeout', '$ionicHistory'];

/* @ngInject */
function lifeCycle($stateParams, $timeout, $ionicHistory) {
    // Usage:
    //
    // Creates:
    //
    var directive = {

        link: link,
        restrict: 'A',
        scope: false
    };
    return directive;

    function link(scope, element, attrs) {
        var idx = 0;
        console.time('loaded')
        console.time('beforeEnter')
        console.time('enter')
        console.time('afterEnter')
        console.time('beforeLeave')
        console.time('leave')
        console.time('afterLeave')
        console.time('unloaded')
        var _nameView = attrs.viewTitle;
        console.log('lifeCycle directive', scope, scope.$id, _nameView, $stateParams);
        scope.$on('$ionicView.loaded', function() {
            console.log(_nameView + ' loaded', scope, scope.$id);
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())
            console.timeEnd('loaded');
        });
        scope.$on('$ionicView.beforeEnter', function() {
            // Anything you can think of
            console.log(_nameView + ' BeforeEnter', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('beforeEnter')
            console.log(idx);
            idx++;
            if (_nameView === 'Account') {
                $timeout(scope.vm.setName, 2000)
                scope.vm.settings.name = _nameView;
                scope.vm.add41();
            }
        });
        scope.$on('$ionicView.enter', function() {
            console.log(_nameView + ' enter', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('enter')
                // Anything you can think of
        });
        scope.$on('$ionicView.afterEnter', function() {
            console.log(_nameView + ' afterEnter', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('afterEnter');
        });

        scope.$on('$ionicView.beforeLeave', function() {
            console.log(_nameView + ' beforeLeave', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('beforeLeave')

            // Anything you can think of
        });
        scope.$on('$ionicView.leave', function() {
            console.log(_nameView + ' Leave', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('leave')

        });

        scope.$on('$ionicView.afterLeave', function() {
            console.log(_nameView + ' afterLeave', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('afterLeave')


        });
        scope.$on('$ionicView.unloaded', function() {
            console.log(_nameView + 'unloaded', scope, scope.$id)
            console.log('$ionicHistory currentState ' + $ionicHistory.currentStateName())

            console.timeEnd('unloaded')
                // Anything you can think of
        });
    }
}
