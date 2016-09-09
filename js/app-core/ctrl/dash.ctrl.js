let DashCtrl = function($scope){
	$scope.dashControls = true;

	$scope.changeDash = function(){
		console.log('changed dash');
	}

};
DashCtrl.$inject = ['$scope'];
export default DashCtrl;