import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';

import '../welcome/module';
import '../screens/module';
import '../help/module';

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
    'app.help'
  ])
  .controller('AppController', AppController);