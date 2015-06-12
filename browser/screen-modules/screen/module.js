import angular from 'angular';
import ngMaterial from 'angular-material';

import '../text/module';

import {
  ScreenController
  }
  from './controllers/screen.controller';


angular
  .module('screen', [
    'ngMaterial',
    'screen.text'
  ])
  .controller('ScreenController', ScreenController);