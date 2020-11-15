const groupsdata = (app, fs) =>{
    const dataPath = '../data/groups.json';
    //const dataPath = '../data/data.json'
    const urlPath = '/groups';
    const controller = require('../controllers/dbcontroller')

    controller(app, fs, dataPath, urlPath);

    //#region methods for working with groupsdata (not used)
    /*
    //readfile - function to take data from json file
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
    app.post('/groups', (req,res)=>{
        readFile(data =>{
            const newGroupId = Object.keys(data).length + 1;

            data[newGroupId] = req.body;

            writeFile(JSON.stringify(data),()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    //update record
    app.put('/groups/:id', (req, res)=>{
        readFile(data=>{
            const groupId = req.params.id - 1;
            data[groupId] = req.body;
            writeFile(JSON.stringify(data),()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    //delete record
    app.delete('/groups/:id', (req, res)=>{
        readFile(data=>{
            const groupId = req.param.id;
            delete data[groupId];
            writeFile(JSON.stringify(data),()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    app.get('/groups', (req, res)=>{
        readFile(data=>{
            res.send(data);
        }, true);
    });

     */
    //#endregion methods for working with groupsdata (not used)
};

module.exports = groupsdata;
