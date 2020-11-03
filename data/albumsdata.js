const albumsdata = (app, fs)=>{
    const dataPath = '.data/albums.json';
    const urlPath = '/albums';
    const controller = require('../data/controller')

    controller(app, fs, dataPath, urlPath);

    //write data to file
}

module.exports = albumsdata;
