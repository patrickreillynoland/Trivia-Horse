angular.module("Triviahorse", ['ngRoute', 'ngResource', 'ui.bootstrap', 'Triviahorse.controllers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/field.html',
        controller: 'QuestionsController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);