let ProfileCtrl = function($scope, $state, ProfileService){
	firebase.auth().onAuthStateChanged(function(user){

		if(user){

		} else {

		}
	});
	$scope.profileControls = true;

	$scope.editProfile = function(){
		console.log('editProfile');
	}

};
ProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];
export default ProfileCtrl;