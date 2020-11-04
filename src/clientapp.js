/*
let clientgroupsData = [
    {
        id: 1,
        groupName: "group1",
        musicStyle: "style1",
        composition: "composition1",
        groupCreationDate: "01.01.1970",
        countryOfFoundation: "Country1"
    },
    {
        id: 2,
        groupName: "group2",
        musicStyle: "style2",
        composition: "composition2",
        groupCreationDate: "01.01.1970",
        countryOfFoundation: "Country2"
    },
    {
        id: 3,
        groupName: "group3",
        musicStyle: "style3",
        composition: "composition3",
        groupCreationDate: "01.01.1970",
        countryOfFoundation: "Country3"
    },
    {
        id: 4,
        groupName: "group4",
        musicStyle: "style4",
        composition: "composition4",
        groupCreationDate: "01.01.1970",
        countryOfFoundation: "Country4"
    },
    {
        id: 5,
        groupName: "group5",
        musicStyle: "style5",
        composition: "composition5",
        groupCreationDate: "01.01.1970",
        countryOfFoundation: "Country5"
    },
    {
        id: 6,
        groupName: "group6",
        musicStyle: "style6",
        composition: "composition6",
        groupCreationDate: "01.01.1970",
        countryOfFoundation: "Country6"
    }
];

 */

let main_sidebar={
    id:"main_sidebar",
    view:"sidebar",
    data:menu_data,
    css:"webix_dark",
    activeTitle: true,
    multipleOpen: true,
    on:{
        onAfterSelect:function(id){
            $$("main_multiview").setValue(id);
        }
    }
};

let editdata_form = {
    view:"form",
    id:"editdata_form",
    elements:[
        {view:"text", label:'Group name', name:"groupName"},
        {view:"text", label:'Music style', name:"musicStyle"},
        {view:"text", label:'Compositions', name:"composition"},
        {view:"text", label:'Group creation date', name:"groupCreationDate"},
        {view:"text", label:'Country of foundation', name:"countryOfFoundation"},
        {id:"save_editdata", view:"button", label:"Save", click:setDatasetA}
    ],
    fillspace:true,
    on:{
        onAfterLoad:function(){
        }
    }
};

let datasetA_popup = webix.ui({
    view:"popup",
    id:"datasetA_popup",
    head:false,
    body:webix.copy(editdata_form)
});

let datasetA_datatable = {
    id:"datasetA_datatable",
        view:"datatable",
        select:"row",
        autoconfig: true,
        columns:[
        {id: "groupName", header: ["Group name", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "musicStyle", header: ["Music style", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "composition", header: ["Compositions", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "groupCreationDate", header: ["Group creation date", {content:"textFilter"}], fillspace: true, sort:"date"},
        {id: "countryOfFoundation", header: ["Country of foundation", {content:"textFilter"}], fillspace: true, sort:"string"}
        ],
        url:"http://localhost:3000/groups",

        on: {
        onAfterSelect: function (selection, preserve) {
            /*
            let updatedata = $$("datasetA_datatable").getItem(selection.id);
            $$("editdata_form").setValues(updatedata);
            datasetA_popup.show();

             */
            $$("editdata_form").bind($$("datasetA_datatable"));
            datasetA_popup.show();
        }
    },

    save:"rest->http://localhost:3000/groups"
}

let datasetA_view={
    id:"datasetA_view",
    view: "layout",
    rows:[
        {
            id:"datasetA_toolbar",
            view:"toolbar",
            elements:[
                {
                    id:"expor_to_excel_button",
                    view:"button",
                    label:"Export to Excel",
                    click:function(){
                        webix.toExcel($$("datasetA_datatable"));
                    }
                },
                {
                    id:"refresh",
                    view:"button",
                    label:"Refresh",
                    click:function(){
                        $$("datasetA_view").refresh();
                    }
                }
            ]
        },
        datasetA_datatable
    ]
};

let datasetB_view = {
    id:"datasetB_view",
    view:"layout",
    rows:[
        {
            id:"datasetB_datatable",
            view:"datatable",
            columns:[
                {id:"groupMemberName", header: "Group member name", editor:"text"},
                {id:"roleInTheGroup", header: "Role in the group", width:150, editor:"text"},
                {id:"dateOfBirth", header: "Date of birth", editor:"text"},
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
    ]
};

let albumsData = new webix.DataCollection({
    url:"http://localhost:3000/albums"
})

let list_of_records = {
    id: "list_of_records",
    view: "list",
    //data:clientgroupsData,
    template: "Group: #groupName#",
    select: true,
    on: {
        /*
        onBeforeRender: function () {
            //$$("list_of_Records").sync($$("datasetA_datatable"));
            //webix.alert($$("list_of_Records").data);
            //webix.alert($$("datasetA_datatable").data)
        },
        */


        onAfterSelect: function (id) {
            /*
            $$("list_of_records_datatable").attachEvent("onBeforeLoad", function(id){
                this.filter(function(data){
                    return data.groupId === id;
                });
            });

             */

            $$("list_of_records_datatable").data.sync(albumsData, function(){
                $$("list_of_records_datatable").filter(function(data){
                    return data.groupId == id;
                });
            });


            //$$("list_of_records_datatable").bind($$("list_of_records"));
        }
    }
};

let songsdata = new webix.DataCollection({
    url:"http://localhost:3000/songs"
})

let list_of_records_datatable = {
    id:"list_of_records_datatable",
    view:"datatable",
    columns:[
        {id:"album_name", header:"Album"},
        {id:"release_date", header:"Release date", editor:"text"},
        {id:"number_of_songs", header:"Number of songs", editor:"text", fillspace: true},
        {id:"number_of_issued_copies", header:"Number of issued copies", editor:"text", fillspace: true},
        {id:"removal_basket", header:"Removal basket", editor:"text", fillspace: true}
    ],
    editable:true,
    on:{
        onAfterSelect: function(id){
            $$("")
        }
    }
}

let list_of_records_template_data = [
    {
        src: "imgs/image001.jpg"
        ,group_name:"Group from datasetA_datatable"
        ,album_title: "album_name from list_of_records_datatable"
        ,song:"title of songs"
        ,awards:"awards from datasetA_datatable"
    }
]



let list_of_records_template ={
    id:"list_of_records_template"
    ,view:"template"
    ,template:"album photo, group name, album title, title of each song, awards"
}

let listOfRecordsView={
    id:"listOfRecordsView",
    view:"layout",
    rows:[
        list_of_records
        ,list_of_records_datatable
    ]
}

let settings_view={
    id:"settings_view"
    ,cols:[
        {
            template:"col1"
        }
        ,{
            template:"col2"
        }
    ]


}

let main_multiview={
    id:"main_multiview",
    view:"multiview",
    cells:[
        datasetA_view
        ,datasetB_view
        ,listOfRecordsView
        ,settings_view
    ]
};

function setDatasetA(){
    let updatedData = $$("editdata_form").getValues();
    $$("datasetA_datatable").updateItem(updatedData.id, updatedData);
    $$("datasetA_popup").hide();
}
