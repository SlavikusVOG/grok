const serverUpload = (app, fs) =>{
    const dirname = "../imgs";
    app.post('/upload', async (req,res) =>{
        try{
            if(!req.files){
                res.send({
                    status: false,
                    message: "No file uploaded"
                });
            }else{
                let file = req.files.upload;

                //Use the mv() method to place the file in upload
                file.mv(`${dirname}/` + file.name);

                //send response
                res.send({
                    status: "server"
                    ,message: "File is uploaded"
                    ,data:{
                        name: file.name,
                        mimetype: file.mimetype,
                        size: file.size
                    }
                });
            }
        }catch(err){
            res.status(500).send(err);
        }
    })

    app.get('/upload', function(req, res){
        const files = fs.readdirSync(`${dirname}`);
        res.send(files);
    })
}

module.exports = serverUpload
