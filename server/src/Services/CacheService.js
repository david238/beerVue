var cache = require('memory-cache');
var memoryCache = new cache.Cache();
class CacheService {

    constructor() {
        // maybe use to fill in all keys before calling the async call get()
        this.allKeys = null;
        this.getAllKeys();
    }

    putIntoCache(keys, value) {
        new Promise((resolve, reject) => {
            resolve(memoryCache.put(keys, JSON.stringify(value)));
        });
    }

    getFromCache(keys) {
        new Promise((resolve, reject) => {
            try {
                var cachedResults = memoryCache.get(keys);
                if (cachedResults == null) {
                    resolve('');
                } else {
                    resolve(cachedResults);
                }    
            } catch(error) {
                reject(error);
            }
        });
    }

    getAllKeys() {
        this.allKeys = memoryCache.keys();
    }
}

module.exports = CacheService;