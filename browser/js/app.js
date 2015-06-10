import angular from 'angular';
import ngNewRouter from 'angular-new-router';

import {
  AppController
  }
  from './controller';

import './welcome/module';
import './screens/module';

angular
  .module('app', [
    'ngNewRouter',
    'app.welcome',
    'app.screens'
  ])
  .controller('AppController', AppController);