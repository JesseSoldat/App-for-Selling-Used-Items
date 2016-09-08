//Libraries
import angular from 'angular';
import 'angular-ui-router';

import LayoutCtrl from './ctrl/layout.ctrl';
import DashCtrl from './ctrl/dash.ctrl';
import LoginCtrl from './ctrl/login.ctrl';

import config from './config';

angular
	.module('app.core', ['ui.router'])
	.config(config)
	.controller('LayoutCtrl', LayoutCtrl)
	.controller('DashCtrl', DashCtrl)
	.controller('LoginCtrl', LoginCtrl)

;