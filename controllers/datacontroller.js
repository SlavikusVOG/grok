const datacontroller = (app, data, urlPath)=>{
    app.get(urlPath, (req, res)=>{
        res.send(data);
    })
}

module.exports = datacontroller
