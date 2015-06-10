'use strict';

class AppController {
  constructor($router){
    this.electronVersion = process.versions['electron'];

    $router.config([
      { path: '/',              redirectTo: '/welcome' },
      { path: '/welcome',       component: 'welcome' },
      { path: '/screens',       component: 'screens' }
    ]);
  }
}
export {
  AppController
  };