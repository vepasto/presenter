import angular from 'angular';

import {
  ScreensController
  }
  from './controllers/screens.controller';

import {
  ScreensService
  }
  from './services/screens.service';

angular
  .module('app.screens', [])
  .controller('ScreensController', ScreensController)
  .service('Screens', ScreensService);