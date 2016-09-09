//Libraries
import angular from 'angular';
import 'angular-ui-router';

//CTRL
import DashCtrl from './ctrl/dash.ctrl';
import LoginCtrl from './ctrl/login.ctrl';

//Directives
import navBar from './directives/nav-bar.directive';
import fileUpload from './directives/file-upload.directive';
//Services
import LoginService from './services/login.service';
import DashService from './services/dash.service';

import config from './config';

angular
	.module('app.core', ['ui.router'])
	.config(config)
	
	.controller('DashCtrl', DashCtrl)
	.controller('LoginCtrl', LoginCtrl)
	.directive('navBar', navBar)
	.directive('fileUpload', fileUpload)

	.service('LoginService', LoginService)
	.service('DashService', DashService)

;