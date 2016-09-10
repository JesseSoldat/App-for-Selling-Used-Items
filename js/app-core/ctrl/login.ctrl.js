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
	$scope.facebookLogin = function(){
		let provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  let token = result.credential.accessToken;
		  // The signed-in user info.
		  let user = result.user;
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  let errorCode = error.code;
		  let errorMessage = error.message;
		  // The email of the user's account used.
		  let email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  let credential = error.credential;
		  // ...
		});
	}//facebookLogin

};
LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];
export default LoginCtrl;