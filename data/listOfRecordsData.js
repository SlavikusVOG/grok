const listOfRecordsData = (app, fs) =>{
    setTimeout(()=>{
        try{
            let bindeddata = [];
            const groupsDataPath = "../data/groups.json";
            const albumsDataPath = "../data/albums.json";
            const songsDataPath = "../data/songs.json";
            const artistsDataPath = "../data/artists.json";
            const encoding = 'utf8';
            const urlPath = '/template';
            const datacontroller = require('../controllers/datacontroller');

            let songsdata = JSON.parse(fs.readFileSync(songsDataPath, encoding));

            let albumsdata = JSON.parse(fs.readFileSync(albumsDataPath, encoding));

            let groupsdata = JSON.parse(fs.readFileSync(groupsDataPath, encoding));

            let artistsdata = JSON.parse(fs.readFileSync(artistsDataPath, encoding));

            albumsdata = albumsdata.map(album=>{
                let album_id = album.id;
                let album_img_src = album.img_src;
                let groupName = groupsdata.find(group => group.id == album.groupId).groupName;
                let album_title = album.album_name;
                let filteredArtistsData = artistsdata.filter(artist => artist.groupId == groupsdata.find(group => group.id == album.groupId).id);
                let awards = filteredArtistsData.map(artist=>{
                    //if(artist.groupId == groupsdata.find(group => group.id == albumsdata.find(album => album.id == song.albumId).groupId).id){
                    return artist.awards;
                    //}
                });
                awards.join(" , ");
                let filteredSongsData = songsdata.filter(song => song.albumId == album_id);
                let song_names = filteredSongsData.map(song=>{
                    return song.song_name;
                })
                return [album_id
                    ,album_img_src
                    , groupName
                    , album_title
                    , song_names
                    , awards];
            });
            for(let i = 0; i < albumsdata.length; i++){
                bindeddata.push({
                    id: albumsdata[i][0]
                    , album_img_src: albumsdata[i][1]
                    , groupName: albumsdata[i][2]
                    , album_title: albumsdata[i][3]
                    , song_names: albumsdata[i][4]
                    , awards: albumsdata[i][5]
                })
            }
            /*
            bindeddata = songsdata.map((song)=>{
                let song_id = song.id;
                let song_name = song.song_name;
                let album_img_src = albumsdata.find(album => album.id == song.albumId).img_src;
                let album_name = albumsdata.find(album => album.id == song.albumId).album_name;
                let groupName = groupsdata.find(group => group.id == albumsdata.find(album => album.id == song.albumId).groupId).groupName;
                artistsdata.filter(artist=>{
                    artist.groupId == groupsdata.find(group => group.id == albumsdata.find(album => album.id == song.albumId).groupId).id
                });
                let awards = artistsdata.map(artist=>{
                    //if(artist.groupId == groupsdata.find(group => group.id == albumsdata.find(album => album.id == song.albumId).groupId).id){
                    return artist.awards;
                    //}
                });

                return [album_img_src
                    , groupName
                    , song_id
                    , song_name
                    , album_name
                    , awards]
            });
             */

            datacontroller(app, bindeddata, urlPath);
        }catch(err){
            throw err;
        }
    }, 5 * 1000);


}

module.exports = listOfRecordsData;
