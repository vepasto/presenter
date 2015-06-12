'use strict';
var remote = require('remote');
var BrowserWindow = remote.require('browser-window');

class Screen {
  close(){
    this.browserWindow.close();
    this.onClose();
  }

  ping(message = 'ping'){
    this.browserWindow.webContents.send('ping-message', message);
  }

  constructor(onClose){
    this.onClose = onClose;
    this.browserWindow = new BrowserWindow({ width: 800, height: 600 });
    this.browserWindow.loadUrl('file://' + __dirname + '/../browser/screen-index.html', { console: true });
    this.browserWindow.openDevTools();
    this.browserWindow.on('closed', () =>{
      this.onClose();
    });
  }
}

class ScreensService {
  emitToAll(path, message){
    Object.keys(this.screens).forEach((key) =>{
      this.screens[key].browserWindow.send(path, message);;
    });
  }

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
    // this.newScreen();
  }
}

export {
  ScreensService
  };