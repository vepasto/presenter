import angular from 'angular';

import {
  WelcomeController
  }
  from './controller';

angular
  .module('app.welcome', [])
  .controller('WelcomeController', WelcomeController);