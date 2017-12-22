exports.random = function() {
    var question = function() {
        axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(function(res) {
            return res;
        })
    }
    return question;
}