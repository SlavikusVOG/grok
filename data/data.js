const groupsdata = require('../data/groupsdata');
const artistsdata = require('../data/artistsdata');
const albumsdata = require('../data/albumsdata');
const songsdata = require('../data/songsdata')


const appData = (app, fs) => {
    app.get('/', (req, res) =>{
        res.send('api-server');
    });
    groupsdata(app,fs);
    artistsdata(app,fs);
    albumsdata(app,fs)
    songsdata(app,fs);
};

module.exports = appData;
