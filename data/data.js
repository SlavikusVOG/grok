const groupsData = require('../data/groupsdata');
const artistsData = require('../data/artistsdata');
const albumsData = require('../data/albumsdata');
const songsData = require('../data/songsdata');
const listOfRecordsData = require('../data/listOfRecordsData');
const serverUpload = require('../controllers/serverUpload')

const appData = (app, fs) => {
    app.get('/', (req, res) =>{
        res.send('api-server');
    });
    groupsData(app,fs);
    artistsData(app,fs);
    albumsData(app,fs)
    songsData(app,fs);
    listOfRecordsData(app,fs);
    serverUpload(app, fs);
};

module.exports = appData;
