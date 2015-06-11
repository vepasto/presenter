'use strict';
var remote = require('remote');
var BrowserWindow = remote.require('browser-window');

class Screen {
  close(){
    this.browserWindow.close();
    this.onClose();
  }

  constructor(onClose){
    this.onClose = onClose;
    this.browserWindow = new BrowserWindow({ width: 800, height: 600 });
    this.browserWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
    this.browserWindow.on('closed', () =>{
      this.onClose();
    });
  }
}

class ScreensService {
  newScreen(id = (new Date().getTime()).toString()){
    let onCloseScreenCallback = () =>{

      let removeScreen = () =>{
        if(this.screens.hasOwnProperty(id)) {
          delete this.screens[id];
        }
      };

      //if $digest is not running
      if(!this.$rootScope.$$phase) {
        this.$rootScope.$apply(removeScreen);
      } else {
        removeScreen();
      }
    };

    this.screens[id] = new Screen(onCloseScreenCallback);
  }

  constructor(_$rootScope_){
    this.$rootScope = _$rootScope_;
    this.screens = {};
    this.newScreen();
  }
}

export {
  ScreensService
  };