import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';

import {
  AppController
  }
  from './controllers/app.controller';

import '../welcome/module';
import '../screens/module';

angular
  .module('app', [
    'ngNewRouter',
    'ngMaterial',
    'app.welcome',
    'app.screens'
  ])
  .controller('AppController', AppController);