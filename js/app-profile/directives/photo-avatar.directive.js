let PhotoAvatar = function(ProfileService){

	return {
		restrict: 'E',
		scope: {
			type: '@'
		},
		templateUrl: './templates/app-profile/photoAvatar.html',
		link: function(scope, element){
			let submitBtn;
			let uploader;

			element.on('click', function(){
				submitBtn = document.getElementById('addPhotosBtn');
				uploader = document.getElementById('uploader');
			});

			element.on('submit', function(){
				let file = element.find('input')[0].files[0];
				if (file) {
					submitBtn.disabled = true;
					ProfileService.fileUpload(file, scope.type, uploader);
				} else {
					return;
				}
			})

		} //link
	}

};
PhotoAvatar.$inject = ['ProfileService'];
export default PhotoAvatar;