'use strict';

class ScreenTextService {
  save(){
    this.localStorageService.set('ScreenText:data', this.data);
  }

  resetLog(){
    this.log = this.localStorageService.set('ScreenText:log', []);
  }

  saveLog(originalData){
    let data = angular.copy(originalData);
    
    data.timestamp = new Date().getTime();
    this.log = this.localStorageService.get('ScreenText:log') || [];
    this.log.unshift(data);
    while(this.log.length > 5){
      this.log.pop();
    }
    this.localStorageService.set('ScreenText:log', this.log);
  }

  constructor(localStorageService){
    this.localStorageService = localStorageService;
    let defaults = {
      style: {
        'color': '#222'
      },
      align: {
        horizontal: 'center',
        vertical: 'center'
      }
    };
    this.log = this.localStorageService.get('ScreenText:log') || [];
    this.data = this.localStorageService.get('ScreenText:data') || defaults;
  }
}

export {
  ScreenTextService
  };