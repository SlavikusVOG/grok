let DatasetB = {};

DatasetB.datatable = {
    id:"datasetB_datatable",
    view:"datatable",
    columns:[
        {id:"groupMemberName", header: "Group member name", editor:"text"},
        {id:"roleInTheGroup", header: "Role in the group", width:150, editor:"text"},
        {id:"dateOfBirth", header: "Date of birth", editor:"date"},
        {id:"countryOfBirth", header: "Counrty of birth", editor:"text"},
        {id:"awards", header: "Awards", editor:"text"}
    ],
    select:"row",
    editable:true,
    scroll:"y",
    datafetch:50,//default
    loadahead:100,
    url:"http://localhost:3000/artists",
}

//datasetB_view - consist of editing datatable with data about artists
DatasetB.view = {
    id:"datasetB_view",
    view:"layout",
    rows:[
        DatasetB.datatable
    ]
};
