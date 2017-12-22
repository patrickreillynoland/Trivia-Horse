angular.module('Triviahorse.services', [])
.service('QuestionsService', ['$http', '$location', function($http, $location) {
    this.getQuestion = function(data) {
        return new Promise (function(resolve, reject) {
            let data = $http.get('/api/questions/')
            data.onload = function() {
                if ()
            }
            .then(function(response) {
                let question = JSON.stringify(response.results);
                return question;
            });
        })  
    }
}])