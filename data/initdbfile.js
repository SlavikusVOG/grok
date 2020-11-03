function initdatafile(){
    let groupsdatastring;
    let fs = require("fs");
    try{
        groupsdatastring = fs.readFile("data.json");
    }catch(err){
        groupsdatastring = JSON.stringify(groupsdata);
        fs.writeFile("data.json", groupsdatastring);
    }
}
