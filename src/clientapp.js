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
});

let list_of_records_template_data = [
    {
        /*
        img_src: "img_src from Album"
        ,group_name:"Group from datasetA_datatable"
        ,album_title: "album_name from list_of_records_datatable"
        ,song:"title of songs"
        ,awards:"awards from datasetA_datatable"
         */
    }
];

let templateData = new webix.DataCollection({
    url:"http://localhost:3000/template"
})

let list_of_records_template = {
    id:"list_of_records_template"
    ,view:"template"
    //,template:"album photo, group name, album title, title of each song, awards"
    //,data: list_of_records_template_data
    /*
    ,template: function(data){
        return '<p><img src ="' + data.img_src + '"/>, '
            + data.group_name + ', '
            + data.album_title + ', '
            + data.song + ', '
            + data.awards
            +'</p>';
    }
     */
    ,template:"<div>Album photo: #album_img_src#</div>"
        + "<div>Group name: #groupName#</div>"
        + "<div>Album title: #album_title#</div>"
        + "<div>Title of each song: #song_names#</div>"
        + "<div>Awards: #awards#</div>"
    ,on:{

    }
    //,src:"http://localhost:3000/template"

}



let list_of_records_template_popup = webix.ui({
    view:"popup",
    id:"list_of_records_template_popup",
    head:false,
    body:webix.copy(list_of_records_template)
});



let list_of_records_datatable = {
    id:"list_of_records_datatable",
    view:"datatable",
    select:"row",
    columns:[
        {id:"album_name", header:"Album"},
        {id:"release_date", header:"Release date", editor:"text"},
        {id:"number_of_songs", header:"Number of songs", editor:"text", fillspace: true},
        {id:"number_of_issued_copies", header:"Number of issued copies", editor:"text", fillspace: true},
        {id:"removal_basket", header:"Removal basket", editor:"text", fillspace: true}
    ],
    editable:true,
    on:{
        onAfterSelect: function(selection, preserve){
            //$$("list_of_records_template").load("http://localhost:3000/template");
            $$("list_of_records_template").data = templateData.getItem(selection.id)
            //webix.alert(templateData.data.getItem(selection.id));
            /*
            let updatedata = $$("datasetA_datatable").getItem(selection.id);
            $$("editdata_form").setValues(updatedata);
            datasetA_popup.show();
             */
            list_of_records_template_popup.show();
        }
    }
};

let listOfRecordsView={
    id:"listOfRecordsView",
    view:"layout",
    rows:[
        list_of_records
        ,list_of_records_datatable
    ]
};

let settings_form ={
    view:"form"
    ,id:"settings_form"
    ,elements:[
        {view:"text", name:"groupName", label:"Group"}
    ]
}

let settings_view={
    id:"settings_view"
    ,view:"form"
    ,rows:[
        {
            view:"toolbar"
            ,elements
        }
    ]
    ,cols:[
        {
            rows:[
                {
                    view:"uploader"
                    ,id: "fileuploader"
                    ,value:"Upload file"
                    , name:"files"
                    ,link:"mylist"
                    ,upload:"http://localhost:3000/upload"
                    //,datatype:"json"
                },
                {
                    view:"list"
                    ,id:"mylist"
                    ,type:"uploader"
                },
                {
                    view:"button"
                    , label: "Get value"
                    , click: function(){
                        let text = this.getParentView().getParentView().getValues();
                        text = JSON.stringify(text, "\n");
                        webix.message("<pre>"+text+"</pre>")
                    }
                }
            ]

        },
        {
            rows:[
                {
                    //body:webix.copy(datasetA_datatable),
                    id:"settings_datatable"
                },
                settings_form
            ]
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
