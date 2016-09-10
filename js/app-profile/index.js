import angular from 'angular';

//CTRL
import ProfileCtrl from './ctrl/profile.ctrl';

//Directive 
import navBarProfile from './directives/nav-bar-profile.directive';
//Services
import ProfileService from './services/profile.service';

angular
	.module('app.profile', [])
	.controller('ProfileCtrl', ProfileCtrl)

	.directive('navBarProfile', navBarProfile)

	.service('ProfileService', ProfileService)

;