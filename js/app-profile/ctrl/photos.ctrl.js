let PhotosCtrl = function($scope, ProfileService, $state){

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			let storageRef= firebase.storage().ref();

			
		}
	})

};
PhotosCtrl.$inject = ['$scope', 'ProfileService', '$state'];
export default PhotosCtrl;