const songsdata = (app, fs)=>{
    const dataPath = '../data/songs.json';
    const urlPath = '/songs';
    const controller = require('../controllers/dbcontroller');

    controller(app, fs, dataPath, urlPath);
}

module.exports = songsdata;
