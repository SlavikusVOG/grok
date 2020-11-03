const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//db consist of functions to initiate data for server
const db = require('../data/db');
//grok_random helps to get random unsigned int values for random data
const grok_random = require('../data/grok_random');
db.initdatafile(grok_random);

const appData = require('../data/data')(app, fs);

const server = app.listen(3000, ()=>{
    console.log(`listening on port %s...`, server.address().port);
})
