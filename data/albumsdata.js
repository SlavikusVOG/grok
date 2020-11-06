const albumsdata = (app, fs)=>{
    const dataPath = '../data/albums.json';
    const urlPath = '/albums';
    const controller = require('../controllers/dbcontroller');

    controller(app, fs, dataPath, urlPath);

}

module.exports = albumsdata;
