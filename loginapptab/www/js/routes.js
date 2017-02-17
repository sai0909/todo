angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'profileCtrl'
  })

 .state('tab.profile', {
    url: '/profile',
    views: {
      'profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

 .state('tab.menu', {
    url: '/menu',
    views: {
      'menu': {
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      }
    }
  })
      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

   .state('profile', {
    url: '/page4',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('edit', {
    url: '/page5',
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

 



$urlRouterProvider.otherwise('/page1')

  

});