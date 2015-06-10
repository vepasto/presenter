import angular from 'angular';

import {
  ScreensController
  }
  from './controllers/screens.controller';

angular
  .module('app.screens', [])
  .controller('ScreensController', ScreensController);