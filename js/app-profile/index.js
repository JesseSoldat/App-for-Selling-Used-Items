import angular from 'angular';

//CTRL
import ProfileCtrl from './ctrl/profile.ctrl';
import EditProfileCtrl from './ctrl/edit-profile.ctrl';

//Directive 
import navBarProfile from './directives/nav-bar-profile.directive';
import photoAvatar from './directives/photo-avatar.directive';
//Services
import ProfileService from './services/profile.service';

angular
	.module('app.profile', [])
	.controller('ProfileCtrl', ProfileCtrl)
	.controller('EditProfileCtrl', EditProfileCtrl)

	.directive('navBarProfile', navBarProfile)
	.directive('photoAvatar', photoAvatar)

	.service('ProfileService', ProfileService)

;