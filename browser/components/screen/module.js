import angular from 'angular';
import ngMaterial from 'angular-material';

import {
  ScreenController
  }
  from './controllers/screen.controller';


angular
  .module('app', [
    'ngMaterial'
  ])
  .controller('ScreenController', ScreenController);