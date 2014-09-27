// Ionic mylo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'mylo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'mylo.services' is found in services.js
// 'mylo.controllers' is found in controllers.js
angular.module('mylo', ['ionic', 'mylo.controllers', 'mylo.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    })
    .state('meditated', {
        url: '/meditated',
        templateUrl: 'templates/meditated.html',
        controller: 'MeditatedCtrl'
    })
    .state('meditationLength', {
        url: '/meditationLength',
        templateUrl: 'templates/meditationLength.html',
        controller: 'MeditationLengthCtrl'
    })
    .state('meditationThoughtless', {
        url: '/meditationThoughtless',
        templateUrl: 'templates/meditationThoughtless.html',
        controller: 'MeditationThoughtlessCtrl'
    })
    .state('reward', {
        url: '/reward',
        templateUrl: 'templates/reward.html',
        controller: 'RewardCtrl'
    })
    .state('stats', {
        url: '/stats',
        templateUrl: 'templates/stats.html',
        controller: 'StatsCtrl'
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');


})

.directive('detectGestures', function($ionicGesture){
    return {
        restrict: 'A',
        
    };
})


/*
.directive('detectGestures', function($ionicGesture) {
  return {
    restrict :  'A',

    link : function(scope, elem, attrs) {
      var gestureType = attrs.gestureType;

      switch(gestureType) {
        case 'swipe':
          $ionicGesture.on('swipe', scope.reportEvent, elem);
          break;
        case 'swiperight':
          $ionicGesture.on('swiperight', scope.reportEvent, elem);
          break;
        case 'swipeleft':
          $ionicGesture.on('swipeleft', scope.reportEvent, elem);
          break;
        case 'doubletap':
          $ionicGesture.on('doubletap', scope.reportEvent, elem);
          break;
        case 'tap':
          $ionicGesture.on('tap', scope.reportEvent, elem);
          break;
      }

    }
  }
})
*/
;

