const cache = require('express-cache-response');
// const cacheControl = require('express-cache-response-directive');

// Middleware function to enable caching
const cacheHandler = (maxAge) => cache({
    get: (key, cb) => {
        console.log("Cache get");
      // Get data from cache store
      cb(null, cacheStore.get(key));
    },
    set: (key, value) => {
        console.log("Cache set");
      // Set data in cache store
      cacheStore.set(key, value);
    },
    maxAge: maxAge,
});
  
module.exports = cacheHandler;
