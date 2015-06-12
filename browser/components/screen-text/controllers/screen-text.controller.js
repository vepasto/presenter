'use strict';
var ipc = require('ipc');

class ScreenTextController {
  showText(data = this.data){
    this.Screens.emitToAll('screen:text', data);
    this.ScreenText.saveLog(data);
  }

  constructor($scope, Screens, ScreenText, localStorageService){
    this.Screens = Screens;
    this.data = ScreenText.data;
    this.ScreenText = ScreenText;

    $scope.$watch(angular.bind(this, function () {
      return this.data; // `this` IS the `this` above!!
    }), function (newVal, oldVal) {
      ScreenText.save();
    }, true);
  }
}
export {
  ScreenTextController
  };