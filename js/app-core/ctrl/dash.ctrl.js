let DashCtrl = function($scope, $state, $stateParams, DashService){
	$scope.dashControls = true;

	let uid;
	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			uid = user.uid;
		
			let getBackground = DashService.getBackground(user);
			getBackground.$loaded().then(function(){
				if(getBackground.$value !== null){
				
					let url = getBackground.$value;
					console.log(url);
					let img = document.getElementById('dashBackground');
					img.style.backgroundImage = 'url('+url+')';
				} else {
					let img = document.getElementById('dashBackground');
					let url = '../img/background-wallpapers-26.jpg';
					img.style.backgroundImage = 'url('+url+')';
				}
			}) //getBackground.$loaded
		} else {
			$state.go('login');
		}
	});

	$scope.changeDash = function(){
		$state.go('editDash');
	}
	$scope.logOut = function(){
		firebase.auth().signOut().then(function(){
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}

};
DashCtrl.$inject = ['$scope', '$state', '$stateParams', 'DashService'];
export default DashCtrl;