'use strict';
var ipc = require('ipc');

class TextService {
  constructor($rootScope){
    ipc.on('screen:text', (data) =>{
      $rootScope.$apply(() =>{
        this.data = data;
      })
    });
  }
}

export {
  TextService
  };