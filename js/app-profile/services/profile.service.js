let ProfileService = function($firebaseArray, $firebaseObject, $state){
	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;
	this.fileUpload = fileUpload;
	this.getAvatar = getAvatar;

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
			fName: user.fName,
			lName: user.lName,
			address: user.address,
			city: user.city,
			state: user.state,
			zip: user.zip,
			country: user.country

		}).then(function(){
			$state.go('profile');
		});
	}

	function editProfile(user, userObj){
		
		let ref = firebase.database().ref('jlist/users/'+userObj.uid+'/bio');

		let array = $firebaseArray(ref);

		array.$loaded().then(function(){
			let item = array.$getRecord(user.$id);
	
			item.fName = user.fName;
			item.lName = user.lName;
			item.address = user.address;
			item.city = user.city;
			item.state = user.state;
			item.zip = user.zip;
			item.country = user.country;

			array.$save(item).then(function(){
				$state.go('profile');
			});
		});	
	} //editProfile

	function fileUpload(file, type, progress){
		let user = firebase.auth().currentUser;

		let storageRef = firebase.storage().ref();
		let fileName = file.name;

		if(type === 'avatar') {
			let ext = fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase();
			let avatarRef = storageRef.child('jlist/'+user.uid+'/avatar/avatar.'+ext);
			let uploadTask = avatarRef.put(file);

			uploadTask.on('state_changed', function progress(snapshot){
				let percent = (snapshot.bytesTransferred / snapshot.totalBytes) *100;

				uploader.value = percent;
			},function error(err){

			},function complete(){
				let url = avatarRef.getDownloadURL().then(function(url){
					let ref = firebase.database().ref('jlist/users/'+user.uid+'/avatar');
					let obj = $firebaseObject(ref);
					obj.url = url;
					obj.$save().then(function(ref){
						let key = ref.key;
						console.log(key);
						$state.go('profile');
					}, function(err){

					});
				}).catch(function(err){

				}); //getDownloadUrl
			}); //uploadTask.on
		}//if 
		else {
			return
		}
	}//fileUpload

	function getAvatar(user){
		let ref = firebase.database().ref('jlist/users/'+user.uid+'/avatar');
		let array = $firebaseArray(ref);
		return array;
	}
};
ProfileService.$inject = ['$firebaseArray', '$firebaseObject', '$state'];
export default ProfileService;