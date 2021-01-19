/*const path = require('path');

module.exports = {
    entry: '../src/serverapp.js',
    output: {
        filename: 'serverapp.js',
        path: path.resolve(__dirname, 'dist'),
    },
};*/

const { resolve } = require('path');

const js_resource   = './src/',
    webpack = require('webpack'),
    path = require('path'),
    publicPath = '/dist';

module.exports = {
    mode: 'development',
    entry: {
        clientapp: '/public/clientapp.js'
        // datasetA: '/public/datasetA.js',
        // datasetB: '/public/datasetB.js',
        // listOfRecords: '/public/listOfRecords.js',
        // menu_data: '/public/menu_data.js',
        // menu: '/public/menu.js',
        // multiView: '/public/multiView.js',
        // settings: '/public/settings.js'
    },
        
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist/public'
    }
}/*,
{
    mode: 'development',
    entry: {
        serverapp: '/src/serverapp.js'
    },
        
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist/source'
    }
}
]*/
