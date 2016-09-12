let PhotosCtrl = function($scope, ProfileService, $state){

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			let storageRef= firebase.storage().ref();

			let photos = ProfileService.getPhotos();

			let fileArray = [];
			let urlArray = [];

			photos.$loaded().then(function(){
				console.log(photos);

				for(let i = 0; i < photos.length; i++){
					fileArray.push(photos[i].name);
				}
				buildUrlArray();

				function buildUrlArray(){
					for(let i = 0; i < fileArray.length; i++){
						storageRef.child('jlist/'+user.uid+'/photos/'+fileArray[i]).getDownloadURL().then(function(url){

							urlArray.push(url);

							$scope.$apply(function(){
								$scope.url = urlArray;

							})

						}); //storageRef
					}//for
					console.log(urlArray);
					
					
				}


			})


		}
	})

};
PhotosCtrl.$inject = ['$scope', 'ProfileService', '$state'];
export default PhotosCtrl;