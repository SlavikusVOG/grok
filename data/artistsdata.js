const artistsdata = (app, fs) =>{
    const dataPath = './data/artists.json';
    const urlPath = '/artists';
    const controller = require('../data/controller')

    controller(app, fs, dataPath, urlPath);
    /*
    //read data from file
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) =>{
        fs.readFile(filePath, encoding, (err, data) =>{
            if(err){
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    //write data to file
    const writeFile =(
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) =>{
        fs.writeFile(filePath, fileData, encoding, err=>{
            if(err){
                throw err
            }
            callback();
        });
    };

    //create new record
    app.post('/artists', (req,res)=>{
        readFile(data =>{
            const newArtistId = Object.keys(data).length + 1;

            data[newArtistId] = req.body;

            writeFile(data, ()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    //update record
    app.put('/artists/:id', (req, res)=>{
        readFile(data=>{
            const artistId = req.param['id'];
            data[artistId] = req.body;
            writeFile(data, ()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    //delete record
    app.delete('/artists/:id', (req, res)=>{
        readFile(data=>{
            const artistId = req.param['id'];
            delete data[artistId];
            writeFile(data,()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    //read
    app.get('/artists', (req, res)=>{
        readFile(data =>{
            res.send(data);
        }, true);
    });

     */

    //
};

module.exports = artistsdata;
