var cache = require('memory-cache');

class CacheService {

    constructor() {

    }

    putIntoCache(keys, value) {
        cache.put(keys, value);
    }
}

module.exports = CacheService;