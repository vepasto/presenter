import angular from 'angular';

import '../text/module';

import {
  TextController
  }
  from './controllers/text.controller';

import {
  TextService
  }
  from './services/text.service';


angular
  .module('screen.text', [])
  // inject text service here
  .run(function(Text){

  })
  .service('Text', TextService)
  .controller('TextController', TextController);
