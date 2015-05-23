// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('taxiApp', ['ionic', 'taxiApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


 .state('home', {
   url: '/home',
   templateUrl: 'templates/login.html',
   controller: 'loginCtrl',
  })



 .state('register', {
    url: "/register",
    templateUrl: "templates/register.html",
    controller:"registerCtrl",   
  })


  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html"
      }
    }
  })

.state('app.booking', {
    url: "/booking",
    views: {
      'menuContent': {
        templateUrl: "templates/booking.html"
      }
    }
  })


  .state('app.rate', {
    url: "/rate_chart",
    views: {
      'menuContent': {
        templateUrl: "templates/rate_chart.html"
      }
    }
  })


  .state('app.previous', {
    url: "/previous",
    views: {
      'menuContent': {
        templateUrl: "templates/previous.html",
    }
  }})


    .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
    }
  }})


  
   
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
