let DashService = function($state,$firebaseArray, $firebaseObject){
	this.getBackground = getBackground;
	this.fileUpload = fileUpload;

	
	let rootRef = firebase.database();

	function getBackground(user){
		let ref = rootRef.ref('jlist/users/'+user.uid+'/dashImg/url');
		let array = $firebaseObject(ref);
		return array;
	}


	function fileUpload(file, uploader, fileType){
		//get the user object
		let user = firebase.auth().currentUser;
		//fileType used for Avatar and Photo
		let storageRef = firebase.storage().ref();

		let fileName = file.name;
		//get the file extension
		let ext = fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase();
		//End point to store the image
		let dashImgRef = storageRef.child('jlist/'+user.uid+'/dash/dashImg/dashImg.'+ext);
		//upload the file and set it as a variable to track
		let uploadTask = dashImgRef.put(file);
		//as the file uploads track the progress 
		
		uploadTask.on('state_changed', 
			function(snapshot){
				let percent = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
				uploader.value = percent;
			},
			function error(err){

			},
			function complete(){
				let url = dashImgRef.getDownloadURL().then(function(url){
					let ref = rootRef.ref('jlist/users/'+user.uid+'/dashImg');
					let obj = $firebaseObject(ref);
					obj.url = url;
					obj.$save().then(function(ref){
						let refId = ref.key;
						console.log(refId);
						$state.go('dash');
					}, function(err){
						console.log(err);
					});//obj.$save
				})//getDownloadURL().then
					.catch(function(err){
						switch (error.code) {
					    case 'storage/object_not_found':
					      // File doesn't exist
					      break;
					    case 'storage/unauthorized':
					      // User doesn't have permission to access the object
					      break;
					    case 'storage/canceled':
					      // User canceled the upload
					      break;
					    case 'storage/unknown':
					      // Unknown error occurred, inspect the server response
					      break;
					  }		 

					});//catch

			
		});//uploadTask.on


	}//fileUpload

};
DashService.$inject = ['$state', '$firebaseArray', '$firebaseObject'];
export default DashService;