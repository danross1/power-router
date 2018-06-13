var app = angular.module('HeroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/powers', {
        templateUrl: '/views/powers.html',
        controller: 'PowersController as PC'
    }).when('/heroes', {
        templateUrl: '/views/heroes.html',
        controller: 'HeroesController as HC'
    }).otherwise({
        template: '<h1>404</h1>'
    });
}]);