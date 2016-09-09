let fileUpload = function(DashService){
	return {
		restrict: 'E',
		scope: {
			type: '@'
		},
		templateUrl: './templates/app-core/file-upload.html',
		link: function(scope, element, attrs, ctrl){
			let uploader;
			let submitBtn;
			element.on('click', function(){
				submitBtn = document.getElementById('#addPhotosBtn');
				uploader = document.getElementById('dashUploader');
			});
			element.on('submit', function(){
				let file = element.find('input')[0].files[0];
				if(file){
					submitBtn.disabled = true;
					DashService.fileUpload(file, uploader, scope.type);
				} else {
					return
				}
			});

		}
	}
};
fileUpload.$inject = ['DashService'];

export default fileUpload;