var gtmApp = angular.module('gtmApp', 
  ['ngRoute', 'gtmAppControllers', 'gtmAppServices']
);

gtmApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/subscribe', {
        templateUrl: 'partials/subscribe.html',
        controller: 'FormCtrl'
      }).
      when('/unsubscribe', {
        resolve: {redirect: 'redirectService'}
      }).
      when('/unsubscribe/valid', {
        templateUrl: 'partials/unsubscribe-valid.html'
      }).
      when('/unsubscribe/error', {
        templateUrl: 'partials/unsubscribe-error.html'
      }).
      otherwise({
        redirectTo: '/subscribe'
      });
    }
]);