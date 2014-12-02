var gtmAppServices = angular.module('gtmAppServices', []);

gtmAppServices.factory('redirectService', ['$http', '$location', function($http, $location) {
	$http.get('api/unsubscribe', {user:{}}).success(function(data){
		if(data.status == 200) {
			$location.path('/unsubscribe/valid');
		} else {
			$location.path('/unsubscribe/error');	
		}
	});	
}]);