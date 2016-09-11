let ProfileCtrl = function($scope, $state, ProfileService){
	firebase.auth().onAuthStateChanged(function(user){

		if(user){
			let userProfile = ProfileService.getProfile(user);

			userProfile.$loaded().then(function(){
				if(userProfile.length > 0){
					$scope.haveBio = true;
				} else {

				}
			})

			$scope.userData = userProfile;

			let avatarData = ProfileService.getAvatar(user);

			avatarData.$loaded().then(function(){
				$scope.avatar = avatarData[0].$value;
			})

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