let ProfileCtrl = function($scope, $state, ProfileService){
	firebase.auth().onAuthStateChanged(function(user){

		if(user){
			let userProfile = ProfileService.getProfile(user);

			$scope.userData = userProfile;

		} else {

		}
	});
	$scope.profileControls = true;

	$scope.editProfile = function(){
		$state.go('editProfile');
	}

	$scope.logOut = function(){
		firebase.auth().signOut().then(function(){
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}

};
ProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];
export default ProfileCtrl;