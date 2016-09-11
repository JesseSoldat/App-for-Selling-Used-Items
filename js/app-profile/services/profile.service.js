let ProfileService = function($firebaseArray, $state){
	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;


	function getProfile(user){
		let ref = firebase.database().ref('jlist/users/'+user.uid+'/bio');
		let array = $firebaseArray(ref);

		return array;

	}

	function addProfile(user, userObj){
		let ref = firebase.database().ref('jlist/users/'+userObj.uid+'/bio');
		let array = $firebaseArray(ref);

		array.$add({
			id: userObj.uid,
			email: userObj.email,
			fName: user.fName

		}).then(function(){
			$state.go('profile');
		});
	}

	function editProfile(user){

	}

};
ProfileService.$inject = ['$firebaseArray', '$state'];
export default ProfileService;