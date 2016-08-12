import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);
app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            template: require('../partials/home.html'),
        })
    ;
});
