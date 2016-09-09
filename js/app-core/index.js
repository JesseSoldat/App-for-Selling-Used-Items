//Libraries
import angular from 'angular';
import 'angular-ui-router';

import DashCtrl from './ctrl/dash.ctrl';
import LoginCtrl from './ctrl/login.ctrl';

import navBar from './directives/nav-bar.directive';

import LoginService from './services/login.service';

import config from './config';

angular
	.module('app.core', ['ui.router'])
	.config(config)
	
	.controller('DashCtrl', DashCtrl)
	.controller('LoginCtrl', LoginCtrl)
	.directive('navBar', navBar)

	.service('LoginService', LoginService)

;