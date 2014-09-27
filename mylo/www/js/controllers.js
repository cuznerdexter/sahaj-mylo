angular.module('mylo.controllers', [])

.controller('MyloCtrl', function($scope) {  
    $scope.reportEvent = function(event)  {
        console.log('Reporting : ' + event.type);
    }
})

.controller('HomeCtrl', function($scope) { 
})

.controller('MeditatedCtrl', function($scope, $ionicGesture, $window, $interval, $state) { 
    $scope.lastEventCalled = 'Try to Swipe the content up, or down \n Try to Swipe the content up, or down \n Try to Swipe the content up, or down \n Try to Swipe the content up, or down \n Try to Swipe the content up, or down \n Try to Swipe the content up, or down';
    var element = angular.element(document.querySelector('#eventPlaceholder'));
    var events = [{
        event: 'swipeup',
        text: 'You swiped me UP!',
        colour: 'bar-balanced',
        url: 'meditationLength'
      },{
        event: 'swipedown',
        text: 'You swiped me Down!',
        colour: 'bar-assertive',
        url: 'home'
      }];
    
    angular.forEach(events, function(obj){
        $ionicGesture.on(obj.event, function (event) {
          $scope.$apply(function () {
            $scope.lastEventCalled = obj.text;
            $scope.barColour = obj.colour;
            //$scope.pageToLoad = function(obj.url){
            //    $location.url(obj.url);
            //};
            $state.transitionTo(obj.url);
            
          });
        }, element);
      });
})

.controller('MeditationLengthCtrl', function($scope) {    
})

.controller('MeditationThoughtlessCtrl', function($scope) {    
})

.controller('RewardCtrl', function($scope) {
})

.controller('StatsCtrl', function($scope) {
});
