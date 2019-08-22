const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/auth/callback', {
        target: 'http://localhost:5000/'
    }))
    app.use(proxy('/api', {
        target: 'http://localhost:5000/'
    }));
}

// this goes in package.json but replacing with this file
// "proxy": {
//     "/auth/callback": {
//       "target": "http://localhost:5000"
//     },
//     "/api": {
//       "target": "http://localhost:5000"
//     }
//   },