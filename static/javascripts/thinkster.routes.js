/**
 * Created by jevin on 8/9/2017.
 */
(function () {
    'use strict';

    angular
        .module('thinkster.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).otherwise('/');
    }
})();