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

  constructor(onClose, browserWindow){
    this.onClose = onClose;
    if(browserWindow) {
      this.browserWindow = browserWindow;
    } else {
      this.browserWindow = new BrowserWindow({ width: 800, height: 600 });
      this.browserWindow.loadUrl('file://' + __dirname + '/../browser/screen-index.html', { console: true });
      this.browserWindow.openDevTools();
    }
    this.browserWindow.removeAllListeners('close');
    this.browserWindow.on('close', () =>{
      this.onClose(this.browserWindow.id);
    });
  }
}

class ScreensService {
  emitToAll(path, message){
    Object.keys(this.screens).forEach((key) =>{
      this.screens[key].browserWindow.send(path, message);
    });
  }

  newScreen(browserWindow = null){
    let onCloseScreenCallback = (id) =>{

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
    let newScreen = new Screen(onCloseScreenCallback, browserWindow);
    this.screens[newScreen.browserWindow.id] = newScreen;
  }

  constructor(_$rootScope_){
    this.$rootScope = _$rootScope_;
    this.screens = {};

    let screens = BrowserWindow
      .getAllWindows()
      .slice(1);

    screens.forEach((browserWindow)=>{
      this.newScreen(browserWindow);
    });
  }
}

export {
  ScreensService
  };