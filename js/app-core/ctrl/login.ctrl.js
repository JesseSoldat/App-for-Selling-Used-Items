let LoginCtrl = function($scope, $state, LoginService){

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			$state.go('dash');
		}
	});

	$scope.register = function(user){
		LoginService.register(user)
	}
	$scope.login = function(user){
		LoginService.login(user);
	}

};
LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];
export default LoginCtrl;