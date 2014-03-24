var savageApp = angular.module('savageApp', ['ngRoute']);

savageApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/damage', {
            templateUrl: '/features/damage/view.html',
            controller: 'DamageCtrl'
        }).
        when('/characters', {
            templateUrl: '/features/characters/view.html',
            controller: 'CharacterCtrl'
        })
        .otherwise({
            redirectTo: '/damage'
        })
    }
]);