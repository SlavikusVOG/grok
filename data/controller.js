const controller = (app, fs, dataPath, urlPath)=>{
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    )=>{
        fs.readFile(filePath, encoding, (err, data) =>{
            if(err){
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };
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
    app.post(urlPath, (req,res)=>{
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
    app.put(urlPath + '/:id', (req, res)=>{
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
    app.delete(urlPath + '/:id', (req, res)=>{
        readFile(data=>{
            const groupId = req.param.id;
            delete data[groupId];
            writeFile(JSON.stringify(data),()=>{
                //send updated data
                res.status(200).send(data);
            });
        }, true);
    });

    app.get(urlPath, (req, res)=>{
        readFile(data=>{
            res.send(data);
        }, true);
    });
};

module.exports = controller
