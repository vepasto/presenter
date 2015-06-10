import angular from 'angular';

import {
  WelcomeController
  }
  from './controllers/welcome.controller';

angular
  .module('app.welcome', [])
  .controller('WelcomeController', WelcomeController);