import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';
import LocalStorageModule from 'angular-local-storage';

import '../welcome/module';
import '../screens/module';
import '../help/module';
import '../screen-text/module';

import {
  AppController
  }
  from './controllers/app.controller';


angular
  .module('app', [
    'ngNewRouter',
    'ngMaterial',
    'app.welcome',
    'app.screens',
    'app.help',
    'app.screenText',
    'LocalStorageModule'
  ])
  .controller('AppController', AppController);