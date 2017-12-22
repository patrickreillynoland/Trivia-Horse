let axios = require('axios');

exports.random = function() {
    return new Promise(function(resolve, reject) {
        axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(resolve => {
            console.log(resolve);
        }).catch(reject => {
            console.log(reject);
        })
    })
}