/*const path = require('path');

module.exports = {
    entry: '../src/serverapp.js',
    output: {
        filename: 'serverapp.js',
        path: path.resolve(__dirname, 'dist'),
    },
};*/

let webpack = require('webpack');

module.exports = {
    entry: "./src/serverapp.js",
    output:{
        path: __dirname + '/dist',
        publicPath: "dist/",
        filename: "serverapp.js"
    },
    module:{
        loaders:[
            {
                
            }
        ]
    }
}
