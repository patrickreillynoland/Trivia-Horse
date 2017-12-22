angular.module('Triviahorse.controllers', ['ngResource', 'ui.bootstrap', 'Triviahorse.services'])
.controller('MainController', ['$scope', function($scope) {
    $scope.letters = function() {
        
    }
}])
.controller('QuestionsController', ['$scope', 'QuestionsService', function($scope, QuestionsService) {
    $scope.question = QuestionsService.getQuestion();
    console.log($scope.question);
}]);