'use strict';

class AppController {
  constructor($router){
    $router.config([
      { path: '/', redirectTo: '/welcome' },
      { path: '/welcome', component: 'welcome' },
      { path: '/screens', component: 'screens' },
      { path: '/screen-text', component: 'screenText', as:'screen-text' },
      { path: '/help', component: 'help' }
    ]);
  }
}
export {
  AppController
  };