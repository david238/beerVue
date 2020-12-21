
var cache = require('memory-cache');

// Task 5: Add caching support. Enhance the first REST endpoint for retrieving beers to support result caching.

const cacheMemory = async (req, res, next) => {
    let key = req.query.name;
    let cacheContent = cache.get(key);
    if (cacheContent) {
        // just to see the difference, uncomment below.
        // res.send({cached: JSON.parse(cacheContent)});
        res.send(JSON.parse(cacheContent));
        return;
    } else {
        // if cacheContent == null, set content when calling res.send
        res.sendResponse = res.send
        res.send = (body) => {
            cache.put(key, body);
            res.sendResponse(body)
        }
        next();
    }
}

module.exports = cacheMemory;