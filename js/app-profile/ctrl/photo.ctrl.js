let PhotoCtrl = function($scope, $state, $stateParams, $firebaseObject, ProfileService){
	let userObj;

	let storage = firebase.storage();

	firebase.auth().onAuthStateChanged(function(user){

		if (user) {
			if($stateParams.myParam === null){
				$state.go('photos');
			}


			userObj = user;

			let photoUrl = $stateParams.myParam.url;

			$scope.url = photoUrl;

		} else {
			$state.go('login');
		}

	}); //firebase.auth()

	$scope.goBack = function(state){
		$state.go(state);
	}

	$scope.deletePhoto = function(url){


		let photoUrl = storage.refFromURL(url);

		photoUrl.getMetadata().then(function(metadata){

			let metaId = metadata.customMetadata.id;

			let ref = firebase.database().ref('jlist/users/'+userObj.uid+'/photos/'+metaId);
			let obj = $firebaseObject(ref);

			obj.$remove().then(function(ref){
			
				photoUrl.delete().then(function(){

					$state.go('photos');
				}).catch(function(err){

				});//photoUrl.delete
			}, function(err){
				console.log(err);
			}); //obj.$remove

		});//customMeta.getMetadata
	}

	$scope.logOut = function(){
		firebase.auth().signOut().then(function(){
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}
};
PhotoCtrl.$inject = ['$scope', '$state', '$stateParams', '$firebaseObject', 'ProfileService'];
export default PhotoCtrl;