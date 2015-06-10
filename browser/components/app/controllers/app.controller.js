'use strict';

class AppController {
  constructor($router){
    $router.config([
      { path: '/', redirectTo: '/welcome' },
      { path: '/welcome', component: 'welcome' },
      { path: '/screens', component: 'screens' }
    ]);
  }
}
export {
  AppController
  };