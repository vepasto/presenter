'use strict';
var ipc = require('ipc');

class ScreenController {
  pingMessageListener(message = 'Ping'){
    this.$scope.$apply(() =>{
      this.$mdToast.show(
        this.$mdToast.simple()
          .content(message)
          .position(['top', 'right'].join(' '))
          .hideDelay(3000)
      );
    });
  }

  constructor($scope, $mdToast){
    this.$mdToast = $mdToast;
    this.$scope = $scope;
    ipc.on('ping-message', this.pingMessageListener.bind(this));
  }
}
export {
  ScreenController
  };