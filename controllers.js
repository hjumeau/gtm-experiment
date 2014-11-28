var gtmAppControllers = angular.module('gtmAppControllers', []);

gtmAppControllers.controller('FormCtrl', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    $scope.user = {};
    $scope.subscribeUser = function(){
    	$http.post('api/subscribe', {user:$scope.user}).success(function(data){
    		$location.path('/subscribe/valid');
    	});	
    };
  }]);