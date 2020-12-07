
var cache = require('memory-cache');

const cacheMemory = async (req, res, next) => {
    let key = req.query.name;
    let cacheContent = cache.get(key);
    if (cacheContent) {
        // res.send({cached: JSON.parse(cacheContent)});
        res.send(JSON.parse(cacheContent));
        return;
    } else {
        res.sendResponse = res.send
        res.send = (body) => {
            cache.put(key, body);
            res.sendResponse(body)
        }
        next();
    }
}

module.exports = cacheMemory;