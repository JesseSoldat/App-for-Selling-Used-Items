let DashCtrl = function($scope, $state, $stateParams, DashService){
	$scope.dashControls = true;

	let uid;
	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			uid = user.uid;
			console.log(uid);
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