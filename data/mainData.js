const mainData = (app, fs)=>{
    const dataPath = '../data/data.json';
    const urlPath = '/maindata';
    const controller = require('../controllers/dbcontroller');

    controller(app, fs, dataPath,urlPath);
}

module.exports = mainData;
