angular.module('Triviahorse.services', [])
.service('QuestionsService', ['$http', '$location', function($http, $location) {
    this.getQuestion = function() {
        return $http({
            method: 'GET',
            url: '/api/questions/'
        }).then(function(res) {
            question = response.data;
            return question;
        });
    }
}])