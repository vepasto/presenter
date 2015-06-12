import angular from 'angular';

import {
  ScreenTextController
  }
  from './controllers/screen-text.controller';

import {
  ScreenTextService
  }
  from './services/screen-text.service';

angular
  .module('app.screenText', [])
  .service('ScreenText', ScreenTextService)
  .controller('ScreenTextController', ScreenTextController);
