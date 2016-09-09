let fileUpload = function(DashService){
	return {
		restrict: 'E',
		scope: {
			type: '@'
		},
		templateUrl: './templates/app-core/file-upload.html'
	}
};
fileUpload.$inject = ['DashService'];

export default fileUpload;