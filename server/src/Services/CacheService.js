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
            console.log('put into cache', keys, JSON.stringify(value));
            resolve(memoryCache.put(keys, JSON.stringify(value)));
        });
    }

    getFromCache(keys) {
        new Promise((resolve, reject) => {
            try {
                console.log('1', keys);
                var cachedResults = memoryCache.get(keys);
                if (cachedResults == null) {
                    console.log('resolve null');
                    resolve('asd');
                } else {
                    console.log('resolve withr esults');
                    resolve(cachedResults);
                }    
            } catch(error) {
                console.log('error in getFromcche', error);
                reject(error);
            }
        });
    }

    getAllKeys() {
        this.allKeys = memoryCache.keys();
        console.log('allkeys', this.allKeys);
    }
}

module.exports = CacheService;