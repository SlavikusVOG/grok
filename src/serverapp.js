const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();
const fs = require('fs');

//enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//load db consist of functions to initiate data for server
const db = require('../data/db');

//load grok_random helps to get random unsigned int values for random data
const grok_random = require('../data/grok_random');

//initial data files
db.initdatafile(grok_random);

//load appData
const appData = require('../data/data')(app, fs);

//start server
const server = app.listen(3000, ()=>{
    console.log(`listening on port %s...`, server.address().port);
})
