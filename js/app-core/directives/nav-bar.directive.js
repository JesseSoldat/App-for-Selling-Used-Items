let navBar = function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: true,
		templateUrl: './templates/app-core/layoutTemp.html',	
	}
};
navBar.$inject = [];
export default navBar;



