let navBarProfile = function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: true,
		templateUrl: './templates/app-core/layoutTemp.html',	
	}
};
navBarProfile.$inject = [];
export default navBarProfile;



