const path = require('path');

module.exports = {
    entry: '../src/serverapp.js',
    output: {
        filename: 'serverapp.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
