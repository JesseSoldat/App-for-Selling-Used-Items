import angular from 'angular';

//CTRL
import ProfileCtrl from './ctrl/profile.ctrl';
import EditProfileCtrl from './ctrl/edit-profile.ctrl';
import PhotosCtrl from './ctrl/photos.ctrl';
import PhotoCtrl from './ctrl/photo.ctrl';


//Directive 
import navBarProfile from './directives/nav-bar-profile.directive';
import photoAvatar from './directives/photo-avatar.directive';
//Services
import ProfileService from './services/profile.service';

angular
	.module('app.profile', [])
	.controller('ProfileCtrl', ProfileCtrl)
	.controller('EditProfileCtrl', EditProfileCtrl)
	.controller('PhotosCtrl', PhotosCtrl)
	.controller('PhotoCtrl', PhotoCtrl)

	.directive('navBarProfile', navBarProfile)
	.directive('photoAvatar', photoAvatar)

	.service('ProfileService', ProfileService)

;