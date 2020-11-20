const groupsData = require('../data/groupsdata');
const artistsData = require('../data/artistsdata');
const albumsData = require('../data/albumsdata');
const songsData = require('../data/songsdata');
const mainData = require('../data/mainData');
const listOfRecordsData = require('../data/listOfRecordsData');
const serverUpload = require('../controllers/serverUpload');

const appData = (app, fs) => {
    groupsData(app,fs);
    artistsData(app,fs);
    albumsData(app,fs)
    songsData(app,fs);
    listOfRecordsData(app,fs);
    serverUpload(app, fs);
    mainData(app,fs);
};

module.exports = appData;
