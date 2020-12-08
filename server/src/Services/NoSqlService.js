var NoSQL = require('nosql');
var db = NoSQL.load('./data.nosql');

class NoSqlService {

    constructor() {
    }


    insertService(params) {
        return new Promise((resolve, reject) => {
            db.insert(params).callback( function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(params);
                }
            });
        });
    }

    findService() {
        return new Promise((resolve, reject) => {
            db.find().make(function(filter) {
                filter.callback(function(err, response) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response);
                    }
                });
            });
        });
    }

    udateService() {

    }

    remove() {

    }
}

module.exports = NoSqlService;