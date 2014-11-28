var gtmApp = angular.module('gtmApp', 
  ['ngRoute', 'gtmAppControllers']
);

gtmApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/subscribe', {
        templateUrl: 'partials/subscribe.html',
        controller: 'FormCtrl'
      }).
      when('/subscribe/valid', {
        templateUrl: 'partials/subscribe-valid.html'
      }).
      when('/unsubscribe/valid', {
        templateUrl: 'partials/unsubscribe-valid.html'
      }).
      otherwise({
        redirectTo: '/subscribe'
      });
    }
]);