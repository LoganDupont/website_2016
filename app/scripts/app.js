'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
    .module('portfolioApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
            })
            .state('personality', {
                url: '/personality',
                templateUrl: 'views/personality.html',
                controller: 'MainCtrl',
            })
            .state('cv', {
                url: '/cv',
                templateUrl: 'views/cv.html',
                controller: 'MainCtrl',
            })
            .state('achievements', {
                url: '/achievements',
                templateUrl: 'views/achievements.html',
                controller: 'MainCtrl',
            })
            .state('extra', {
                url: '/extra',
                templateUrl: 'views/extra.html',
                controller: 'MainCtrl',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'MainCtrl',
            });                
    });


  
