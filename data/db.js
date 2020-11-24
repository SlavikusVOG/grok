module.exports = {
    initdatafile: function (grok_random) {

        //#region old database (not used)
        /*let groupsData = [
            {
                id: 1,
                groupName: "group1",
                musicStyle: "style1",
                composition: "composition1",
                groupCreationDate: new Date(1970, 1,1),
                countryOfFoundation: "Country1"
            },
            {
                id: 2,
                groupName: "group2",
                musicStyle: "style2",
                composition: "composition2",
                groupCreationDate: new Date(1970, 1,1),
                countryOfFoundation: "Country2"
            },
            {
                id: 3,
                groupName: "group3",
                musicStyle: "style3",
                composition: "composition3",
                groupCreationDate: new Date(1970, 1,1),
                countryOfFoundation: "Country3"
            },
            {
                id: 4,
                groupName: "group4",
                musicStyle: "style4",
                composition: "composition4",
                groupCreationDate: new Date(1970, 1,1),
                countryOfFoundation: "Country4"
            },
            {
                id: 5,
                groupName: "group5",
                musicStyle: "style5",
                composition: "composition5",
                groupCreationDate: new Date(1970, 1,1),
                countryOfFoundation: "Country5"
            },
            {
                id: 6,
                groupName: "group6",
                musicStyle: "style6",
                composition: "composition6",
                groupCreationDate: new Date(1970, 1,1),
                countryOfFoundation: "Country6"
            }
        ];

        let artistsData = [
            {
                id: 1,
                groupId: 1,
                groupMemberName: "Artist1",
                roleInTheGroup: "Role1",
                dateOfBirth: new Date(1970, 1,1),
                countryOfBirth: "Country1",
                awards: "Awards1"
            },
            {
                id: 2,
                groupId: 1,
                groupMemberName: "Artist2",
                roleInTheGroup: "Role2",
                dateOfBirth: new Date(1970, 1,1),
                countryOfBirth: "Country2",
                awards: "Awards2"
            },
            {
                id: 3,
                groupId: 1,
                groupMemberName: "Artist3",
                roleInTheGroup: "Role3",
                dateOfBirth: new Date(1970, 1,1),
                countryOfBirth: "Country3",
                awards: "Awards3"
            },
            {
                id: 4,
                groupId: 1,
                groupMemberName: "Artist4",
                roleInTheGroup: "Role4",
                dateOfBirth: new Date(1970, 1,1),
                countryOfBirth: "Country4",
                awards: "Awards4"
            },
            {
                id: 5,
                groupId: 1,
                groupMemberName: "Artist5",
                roleInTheGroup: "Role5",
                dateOfBirth: new Date(1970, 1,1),
                countryOfBirth: "Country5",
                awards: "Awards5"
            },
            {
                id: 6,
                groupId: 1,
                groupMemberName: "Artist6",
                roleInTheGroup: "Role6",
                dateOfBirth: new Date(1970, 1,1),
                countryOfBirth: "Country6",
                awards: "Awards6"
            },
        ];
        */

//#endregion old database (not used)

        //#region generate data

        const zeroPad = (num, places) => String(num).padStart(places, '0')
        //todo create classes for data
        /*class Group{
            constructor(id,
                        groupname,
                        musicStyle,
                        composition,
                        groupCreationDate,
                        countryOfFoundation,
                        artists,
                        albums){
                this.id = id;
                this.groupname = groupname;
                this.musicStyle = musicStyle;
                this.composition = composition;
                this.groupCreationDate = groupCreationDate;
                this.countryOfFoundation = countryOfFoundation;
                this.artists = artists;
                this.albums = albums;
                //this.artists = this.#createArtists(id);
                //this.albums = this.#createAlbums(id);
            }
        }

        class Artist{
            constructor(id,
                        groupId,
                        roleInTheGroup,
                        groupMemberName,
                        dateOfBirth,
                        countryOfBirth,
                        awards){
                this.id = id;
                this.groupId = groupId;
                this.groupMemberName = groupMemberName;
                this.dateOfBirth = dateOfBirth;
                this.countryOfBirth = countryOfBirth;
                this.awards = awards;
            }
        }

        class Album{
            constructor(id,
                        groupId,
                        album,
                        release_date,
                        songs,
                        number_of_songs,
                        number_of_issued_copies,
                        removal_basket,
                        img_src){
                this.id = id;
                this.groupId = groupId;
                this.album = album;
                this.release_date = release_date;
                this.songs = songs;
                this.number_of_songs = number_of_songs;
                this.number_of_issued_copies = number_of_issued_copies;
                this.removal_basket = removal_basket;
                this.img_src = img_src;
            }
        }

        class Song{
            constructor(id,
                        song_name,
                        albumId){
                this.id = id;
                this.song_name = song_name;
                this.albumId = albumId;
            }
        }*/


        let createDate = function(){
            let date = new Date();
            //date.setHours(0, 0, 0, 0);
            return date;
        }

        let createArtists = function (groupId) {
            let artists = new Array();
            for (let artistIndex = 0; artistIndex <= grok_random.getRandomInt(10); artistIndex++) {
                artists[artistIndex] = new Object();
                artists[artistIndex].id = artistIndex;
                artists[artistIndex].groupId = groupId;
                artists[artistIndex].roleInTheGroup = `Role${artistIndex}`;
                artists[artistIndex].groupMemberName = `Artist${groupId}_${artistIndex}`;
                artists[artistIndex].dateOfBirth = createDate();
                artists[artistIndex].countryOfBirth = `Country${artistIndex}`;
                artists[artistIndex].awards = `Awards${artistIndex}`
            }
            return artists;
        };
        let createSongs = function(albumId){
            let songs = new Array();
            for(let songIndex = 0; songIndex < grok_random.getRandomInt(30); songIndex++){
                songs[songIndex] = new Object();
                songs[songIndex].id = songIndex;
                songs[songIndex].song_name = `Song${songIndex}`;
                songs[songIndex].albumId = albumId;
            }
            return songs;
        }

        let createAlbums = function(groupIndex){
            let albums = new Array();
            for(let albumIndex = 0; albumIndex < grok_random.getRandomInt(20); albumIndex++){
                albums[albumIndex] = new Object();
                albums[albumIndex].id = albumIndex;
                albums[albumIndex].groupId = groupIndex;
                albums[albumIndex].album = `Album${groupIndex}_${albumIndex}`
                albums[albumIndex].release_date = createDate();
                albums[albumIndex].songs = createSongs(albumIndex);
                albums[albumIndex].number_of_songs = albums[albumIndex].songs.length;
                albums[albumIndex].number_of_issued_copies = grok_random.getRandomArbitrary(1000, 10000000);
                albums[albumIndex].removal_backet = grok_random.getRandomInt(10);
                albums[albumIndex].img_src_src = `imgs/img${zeroPad(albumIndex, 4)}`;
            }
            return albums;
        }


        let groupsData = new Array();
        for(let groupIndex = 0; groupIndex < 10; groupIndex++){
            groupsData[groupIndex] = new Object();
            groupsData[groupIndex].id = groupIndex;
            groupsData[groupIndex].groupName = `group${groupIndex}`;
            groupsData[groupIndex].musicStyle = `style${groupIndex}`;
            groupsData[groupIndex].composition = `compositions${groupIndex}`;
            groupsData[groupIndex].groupCreationDate = createDate();
            groupsData[groupIndex].countryOfFoundation = `Country${groupIndex}`;
            groupsData[groupIndex].artists = createArtists(groupIndex);
            groupsData[groupIndex].albums = createAlbums(groupIndex);
        }

        //endregion generate data

        //#region input data into data/data.json
        let fs = require("fs");
        const dataFile = "../data/data.json"
        try{
            if(fs.existsSync(dataFile)){
                console.log(`${dataFile} exists`)
            }else{
                fs.writeFileSync(dataFile,JSON.stringify(groupsData));
            }
        }catch(err){
            throw err;
        }
        //#endregion input data into files

        const fileGroupsName = "../data/groups.json";
        const fileArtistsName = "../data/artists.json";
        const fileAlbumsName = "../data/albums.json";
        const fileSongsName = "../data/songs.json";

        //#region old check for db files existence
        /*
        let groupsDataPath = "data/groups.json";
        let artistsDataPath = "data/artists.json";
        let encoding = 'utf8';
        fs.readFile(groupsDataPath, encoding, (readFileErr, data)=>{
            if(readFileErr){
                throw readFileErr;
                console.log(data);
                fs.writeFile("data/groups.json", JSON.stringify(groupsdata),function(writeFileErr, result){
                    if(writeFileErr) console.log('error', writeFileErr);
                });
            }
        })
        fs.readFile(artistsDataPath, encoding, (err, data)=>{
            if(err){
                throw err;
                console.log(data);
                fs.writeFile("data/artists.json", JSON.stringify(groupsdata),function(err, result){
                    if(err) console.log('error', err);
                });
            }
        })

         */
        //#endregion old check for db files existence

        //#region input data into datafiles
        try {
            let data = new Array();
            let clearData = function(data){
                return data = [];
            }

            data = clearData(data);
            //if file exists, do nothing, else create new file
            if(fs.existsSync(fileGroupsName)){
                console.log(`${fileGroupsName} exists`);
            } else{
                for(let index = 0; index < groupsData.length; index++){
                    data.push(groupsData[index]);
                }
                fs.writeFileSync(fileGroupsName, JSON.stringify(data));
            }

            data = clearData(data);
            if(fs.existsSync(fileArtistsName)){
                console.log(`${fileArtistsName} exists`);
            } else{
                for(let groupIndex = 0; groupIndex < groupsData.length; groupIndex++){
                    for(let artistIndex = 0; artistIndex < groupsData[groupIndex].artists.length; artistIndex++){
                        data.push(groupsData[groupIndex].artists[artistIndex]);
                    }
                }
                fs.writeFileSync(fileArtistsName, JSON.stringify(data));

                //#region old check for data file existence (not used)
                /*
                fs.readFile(fname,function(err, data){
                    if(err){
                        return console.error(`Read file ${fname} error: ${err.message}`)
                    }
                })

                 */
                //#endregion old check for data file existence (not used)

                /*
                fs.readFile(fileGroupsName, 'utf8', (err, data)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }else{
                        const Artists = artistsData;
                        let groups_count;
                        groups_count = JSON.parse(data).length;
                        for(let i = 7; i < 200; i++){
                            Artists.push({
                                id: i,
                                groupId: grok_random.getRandomArbitrary(1, groups_count),
                                groupMemberName: `Artist${i}`,
                                roleInTheGroup:`Role${i}`,
                                dateOfBirth: new Date(1970, 1,1),
                                countryOfBirth: `Country${i}`,
                                awards: `Awards${i}`
                            })
                        }
                        fs.writeFile(fileArtistsName, JSON.stringify(Artists), function(writeFileErr){
                            if(writeFileErr) {
                                console.log(`Write file ${fileArtistsName} error: ${writeFileErr.message}`);
                            }else{
                                console.log(`${fileArtistsName} created`)
                            }
                        });
                    }
                });

                 */
            }

            data = clearData(data);
            if(fs.existsSync(fileAlbumsName)){
                console.log(`${fileAlbumsName} exists`);
            } else{
                for(let groupIndex = 0; groupIndex < groupsData.length; groupIndex++){
                    for(let albumIndex = 0; albumIndex < groupsData[groupIndex].albums.length; albumIndex++){
                        data.push(groupsData[groupIndex].albums[albumIndex]);
                    }
                }
                fs.writeFileSync(fileAlbumsName, JSON.stringify(data));

                /*
                const Albums = [{
                    id:1
                    ,album_name:"Album1"
                    ,groupId: 1
                    ,release_date: new Date(1970, 1,1)
                    ,number_of_songs: 10
                    ,number_of_issued_copies: 10000
                    ,removal_basket: 10
                    ,img_src:"imgs/image001"
                }];

                 */

                //#region groups count (not used)
                /*
                let groups_count;
                fs.readFile(fileGroupsName, (err, data)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }
                    groups_count = parseInt(JSON.parse(data).length);
                })
                 */
                //#endregion groups count (not used)
                /*
                fs.readFile(fileGroupsName, 'utf8', (err, data)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }else{
                        let groups_count = JSON.parse(data).length;
                        const zeroPad = (num, places) => String(num).padStart(places, '0')
                        for(let i = 2; i < 100; i++){
                            Albums.push({
                                id:i
                                ,album_name:`Album${i}`
                                ,groupId: grok_random.getRandomArbitrary(1, groups_count)
                                ,release_date: new Date(1970, 1,1)
                                ,number_of_songs: grok_random.getRandomArbitrary(1,30)
                                ,number_of_issued_copies: grok_random.getRandomArbitrary(100, 1000000)
                                ,removal_basket: grok_random.getRandomInt(10)
                                ,img_src:`imgs/img${zeroPad(i,4)}`
                            })
                        }
                        fs.writeFile(fileAlbumsName, JSON.stringify(Albums), function(writeFileErr){
                            if(writeFileErr){
                                console.log('error', writeFileErr);
                            }
                            else{
                                console.log(`${fileAlbumsName} created`)
                            }
                        });
                    }
                });

                 */
            }

            data = clearData(data);
            if(fs.existsSync(fileSongsName)){
                console.log(`${fileSongsName} exists`);
            }else{
                /*
                const Songs = [{
                    id:1
                    ,song_name:"Song1"
                    ,albumId:1
                }]
                */

                for(let groupIndex = 0; groupIndex < groupsData.length; groupIndex++){
                    for(let albumIndex = 0; albumIndex < groupsData[groupIndex].albums.length; albumIndex++){
                        for(let songIndex = 0; songIndex < groupsData[groupIndex].albums[albumIndex].songs.length; songIndex++){
                            data.push(groupsData[groupIndex].albums[albumIndex].songs[songIndex]);
                        }
                    }
                }

                fs.writeFileSync(fileSongsName, JSON.stringify(data));
                /*
                fs.readFile(fileAlbumsName, 'utf8', (err, albumsData)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }else{
                        let albums_count = JSON.parse(albumsData).length;
                        for(let i = 2; i < 10000; i++){
                            Songs.push({
                                id:1
                                ,song_name:`Song${i}`
                                ,albumId:grok_random.getRandomArbitrary(1,albums_count)
                            });
                        }
                        fs.writeFile(fileSongsName, JSON.stringify(Songs), function(writeFileErr){
                            if(writeFileErr){
                                console.log('error', writeFileErr);
                            }
                            else{
                                console.log(`${fileSongsName} created`)
                            }
                        });
                    }
                });

                 */
            }

        } catch (err) {
            console.log(err);
        }

        //#region old function for checking db (not used)
        /*
        fs.readFile(fname, function(err){
            if(err){
                fs.writeFile(fname, JSON.stringify(groupsData),function(writeFileErr, result){
                    if(writeFileErr) console.log('error', writeFileErr);
                });
                return;
            }
            console.log(`${fname} exists`)
        })

         */
        /*
        let groups_count;
        fs.readFile(fileGroupsName, 'utf8', (err, data)=>{
            if(err){
                return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
            }else{
                groups_count = JSON.parse(data).length;
            }
        });
        */

        /*
        try {
            //if file exists, do nothing, else create new file
            if(fs.existsSync(fileArtistsName)){
                console.log(`${fileArtistsName} exists`);
            } else{

                fs.readFile(fileGroupsName, 'utf8', (err, data)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }else{
                        const Artists = artistsData;
                        let groups_count;
                        groups_count = JSON.parse(data).length;
                        for(let i = 7; i < 200000; i++){
                            Artists.push({
                                id: i,
                                groupId: grok_random.getRandomArbitrary(1, groups_count),
                                groupMemberName: `Artist${i}`,
                                roleInTheGroup:`Role${i}`,
                                dateOfBirth: "01.01.1970",
                                countryOfBirth: `Country${i}`,
                                awards: `Awards${i}`
                            })
                        }
                        fs.writeFile(fileArtistsName, JSON.stringify(Artists), function(writeFileErr){
                            if(writeFileErr) {
                                console.log(`Write file ${fileArtistsName} error: ${writeFileErr.message}`);
                            }
                        });
                    }
                });

            }
        } catch(err){
            console.log(err);
        }

         */
        /*
        try{
            if(fs.existsSync(fileAlbumsName)){
                console.log(`${fileAlbumsName} exists`);
            } else{
                const Albums = [{
                    id:1
                    ,album_name:"Album1"
                    ,groupId: 1
                    ,release_date: "01.01.1970"
                    ,number_of_songs: 10
                    ,number_of_issued_copies: 10000
                    ,removal_basket: 10
                }];


                fs.readFile(fileGroupsName, 'utf8', (err, data)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }else{
                        let groups_count = JSON.parse(data).length;
                        for(let i = 2; i < 100; i++){
                            Albums.push({
                                id:i
                                ,album_name:`Album${i}`
                                ,groupId: grok_random.getRandomArbitrary(1, groups_count)
                                ,release_date: "01.01.1970"
                                ,number_of_songs: grok_random.getRandomArbitrary(1,30)
                                ,number_of_issued_copies: grok_random.getRandomArbitrary(100, 1000000)
                                ,removal_basket: grok_random.getRandomInt(10)
                            })
                        }
                        fs.writeFile(fileAlbumsName, JSON.stringify(Albums), function(writeFileErr){
                            if(writeFileErr){
                                console.log('error', writeFileErr);
                            }
                        })
                    }
                });
            }
        }catch(err){
            console.log(err);
        }

         */
        /*
        try{
            if(fs.existsSync(fileSongsName)){
                console.log(`${fileSongsName} exists`);
            }else{
                const Songs = [{
                    id:1
                    ,song_name:"Song1"
                    ,albumId:1
                }]

                fs.readFile(fileAlbumsName, 'utf8', (err, albumsData)=>{
                    if(err){
                        return console.error(`Read file ${fileGroupsName} error: ${err.message}`);
                    }else{
                        let albums_count = JSON.parse(albumsData).length;
                        for(let i = 2; i < 10000; i++){
                            Songs.push({
                                id:1
                                ,song_name:`Song${i}`
                                ,albumId:grok_random.getRandomArbitrary(1,albums_count)
                            });
                        }
                        fs.writeFile(fileSongsName, JSON.stringify(Songs), function(writeFileErr){
                            if(writeFileErr){
                                console.log('error', writeFileErr);
                            }
                        });
                    }
                });
            }
        }catch(err){
            console.log(err);
        }

         */
        //#endregion old function for checking db (not used)
    }
}



