const serverUpload = (app) =>{
    app.post('/upload', async (req,res) =>{
        try{
            if(!req.files){
                res.send({
                    status: false,
                    message: "No file uploaded"
                });
            }else{
                let img = req.files.upload;

                //Use the mv() method to place the file in upload
                img.mv('../imgs/' + img.name);

                //send response
                res.send({
                    status: true
                    ,message: "File is uploaded"
                    ,data:{
                        name: img.name,
                        mimetype: img.mimetype,
                        size: img.size
                    }
                });
            }
        }catch(err){
            res.status(500).send(err);
        }
    })
}

module.exports = serverUpload
