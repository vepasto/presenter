import angular from 'angular';

import {
  HelpController
  }
  from './controllers/help.controller';

angular
  .module('app.help', [])
  .controller('HelpController', HelpController);