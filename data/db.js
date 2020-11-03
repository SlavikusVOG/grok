module.exports = {
    initdatafile: function (grok_random) {
        //#region database
        let groupsData = [
            {
                id: 1,
                groupName: "group1",
                musicStyle: "style1",
                composition: "composition1",
                groupCreationDate: "01.01.1970",
                countryOfFoundation: "Country1"
            },
            {
                id: 2,
                groupName: "group2",
                musicStyle: "style2",
                composition: "composition2",
                groupCreationDate: "01.01.1970",
                countryOfFoundation: "Country2"
            },
            {
                id: 3,
                groupName: "group3",
                musicStyle: "style3",
                composition: "composition3",
                groupCreationDate: "01.01.1970",
                countryOfFoundation: "Country3"
            },
            {
                id: 4,
                groupName: "group4",
                musicStyle: "style4",
                composition: "composition4",
                groupCreationDate: "01.01.1970",
                countryOfFoundation: "Country4"
            },
            {
                id: 5,
                groupName: "group5",
                musicStyle: "style5",
                composition: "composition5",
                groupCreationDate: "01.01.1970",
                countryOfFoundation: "Country5"
            },
            {
                id: 6,
                groupName: "group6",
                musicStyle: "style6",
                composition: "composition6",
                groupCreationDate: "01.01.1970",
                countryOfFoundation: "Country6"
            }
        ];

        let artistsData = [
            {
                id: 1,
                groupId: 1,
                groupMemberName: "Artist1",
                roleInTheGroup: "Role1",
                dateOfBirth: "01.01.1970",
                countryOfBirth: "Country1",
                awards: "Awards1"
            },
            {
                id: 2,
                groupId: 1,
                groupMemberName: "Artist2",
                roleInTheGroup: "Role2",
                dateOfBirth: "01.01.1970",
                countryOfBirth: "Country2",
                awards: "Awards2"
            },
            {
                id: 3,
                groupId: 1,
                groupMemberName: "Artist3",
                roleInTheGroup: "Role3",
                dateOfBirth: "01.01.1970",
                countryOfBirth: "Country3",
                awards: "Awards3"
            },
            {
                id: 4,
                groupId: 1,
                groupMemberName: "Artist4",
                roleInTheGroup: "Role4",
                dateOfBirth: "01.01.1970",
                countryOfBirth: "Country4",
                awards: "Awards4"
            },
            {
                id: 5,
                groupId: 1,
                groupMemberName: "Artist5",
                roleInTheGroup: "Role5",
                dateOfBirth: "01.01.1970",
                countryOfBirth: "Country5",
                awards: "Awards5"
            },
            {
                id: 6,
                group: 1,
                groupMemberName: "Artist6",
                roleInTheGroup: "Role6",
                dateOfBirth: "01.01.1970",
                countryOfBirth: "Country6",
                awards: "Awards6"
            },
        ];

//#endregion database
        let fs = require("fs");

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
        //try to find data file for groups data
        let fname = "../data/groups.json";
        /*
        try {
            //if file exists, do nothing, else create new file
            if(fs.existsSync(fname)){
                console.log(`${fname} exists`);
            } else{
                fs.writeFile("data/groups.json", JSON.stringify(groupsData),function(writeFileErr, result){
                    if(writeFileErr) console.log('error', writeFileErr);
                });
            }
        } catch (err) {
            console.log(err);
        }

         */
        fs.readFile(fname, function(err){
            if(err){
                fs.writeFile(fname, JSON.stringify(groupsData),function(writeFileErr, result){
                    if(writeFileErr) console.log('error', writeFileErr);
                });
                return;
            }
            console.log(`${fname} exists`)
        })
        //try to find data file for groups data
        fname = "../data/artists.json"
        try {
            //if file exists, do nothing, else create new file
            if(fs.existsSync(fname)){
                console.log(`${fname} exists`);
            } else{
                const Artists = artistsData;
                let groupLength;
                fs.readFile(fname,function(err, data){
                    if(err){
                        return console.error(`Ошибка при чтении файла `)
                    }
                })
                for(let i = 6; i < 200000; i++){
                    Artists.push({
                        id: i,
                        groupId: 1,
                        groupMemberName: `Artist${i}`,
                        roleInTheGroup:`Role${i}`,
                        dateOfBirth: "01.01.1970",
                        countryOfBirth: `Country${i}`,
                        awards: `Awards${i}`
                    })
                }
                fs.writeFile(fname, JSON.stringify(Artists), function(writeFileErr, result){
                    if(writeFileErr) {
                        console.log('error', writeFileErr);
                    }
                });
            }
        } catch(err){
            console.log(err);
        }
        fname = "../data/albums.json"
        try{
            if(fs.existsSync(fname)){
                console.log(`${fname} exists`);
            } else{
                const Albums = [{
                    id:1
                    ,groupId: 1
                    ,release_date: "01.01.1970"
                    ,number_of_songs: 10
                    ,number_of_issued_copies: 10000
                    ,removal_basket: 10
                }];

                for(let i = 2; i < 100; i++){
                    Albums.push({
                        id:i
                        ,release_date: "01.01.1970"
                        ,number_of_songs: grok_random.getRandomArbitrary(1,30)
                        ,number_of_issued_copies: grok_random.getRandomArbitrary(100, 1000000)
                        ,removal_basket: grok_random.getRandomInt(10)
                    })
                }
                fs.writeFile(fname, JSON.stringify(Albums), function(writeFileErr, result){
                    if(writeFileErr){
                        console.log('error', writeFileErr);
                    }
                })
            }
        }catch(err){
            console.log(err);
        }
    }
}



