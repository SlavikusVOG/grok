const groupsdata = require('./groupsdata');
const artistsdata = require('./artistsdata');
const albumsdata = require('./albumsdata');


const appData = (app, fs) => {
    app.get('/', (req, res) =>{
        res.send('api-server');
    });
    groupsdata(app,fs);
    artistsdata(app,fs);
    albumsdata(app,fs)
};

module.exports = appData;
