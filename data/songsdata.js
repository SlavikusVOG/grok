const songsdata = (app, fs)=>{
    const dataPath = '../data/songs.json';
    const urlPath = '/songs';
    const controller = require('../data/controller');

    controller(app, fs, dataPath, urlPath);
}

module.exports = songsdata;
