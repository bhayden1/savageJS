var savageApp = angular.module('savageApp', []);

savageApp.controller('NavCtrl', function ($scope) {
    $scope.links = [
        { name: 'Damage', href: 'Damage' }
    ]
});