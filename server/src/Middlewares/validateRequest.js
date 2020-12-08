const NoSqlService = require('../Services/NoSqlService');
const noSqlService = new NoSqlService();
var stringifySafe = require('json-stringify-safe');

// Task 3: Create an express middleware module.
const validateRequest  = async (req, res, next) => {
    try {
        const xUserHeader = req.headers['x-user'];

        //validate x-user to contain a valid formatted email address
        if (xUserHeader && xUserHeader.includes("@") && xUserHeader.includes(".")) {
            //valid req
            // log using nosql database.
            noSqlService.insertService(stringifySafe(req));
            // go next
            next();
        } else {
            throw new Error();
        }
    } catch (e) {
        res.status(401).json({
            error: 'request not valid'
        });
    }
}

module.exports = validateRequest;