let ListOfRecords = {};

//albumsData - datacollection with albums data
ListOfRecords.albumsData = new webix.DataCollection({
    url:"http://localhost:3000/albums"
})

ListOfRecords.list = {
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
            $$("list_of_records_datatable").data.sync(ListOfRecords.albumsData, function(){
                $$("list_of_records_datatable").filter(function(data){
                    return data.groupId == id;
                });
            });
            //$$("list_of_records_datatable").bind($$("list_of_records"));
        }
    }
};

/*
ListOfRecordssongsdata = new webix.DataCollection({
    url:"http://localhost:3000/songs"
});
*/

/*
ListOfRecordslist_of_records_template_data = [
    {

        img_src: "img_src from Album"
        ,group_name:"Group from datasetA_datatable"
        ,album_title: "album_name from list_of_records_datatable"
        ,song:"title of songs"
        ,awards:"awards from datasetA_datatable"

    }
];
*/
ListOfRecords.templateData = new webix.DataCollection({
    url:"http://localhost:3000/template"
})


ListOfRecords.template = {
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

};

ListOfRecords.popup = {
    view:"popup",
    id:"list_of_records_template_popup",
    head:false,
    body:webix.copy(ListOfRecords.template)
};

/*ListOfRecords.popup = webix.ui({
    view:"popup",
    id:"list_of_records_template_popup",
    head:false,
    body:webix.copy(ListOfRecords.template)
});*/

ListOfRecords.datatable = {
    id:"list_of_records_datatable",
    view:"datatable",
    select:"row",
    columns:[
        {id:"album_title", header:"Album"},
        {id:"release_date", header:"Release date", editor:"text"},
        {id:"number_of_songs", header:"Number of songs", editor:"text", fillspace: true},
        {id:"number_of_issued_copies", header:"Number of issued copies", editor:"text", fillspace: true},
        {id:"removal_basket", header:"Removal basket", editor:"text", fillspace: true}
    ],
    editable:true,
    on:{
        onAfterSelect: function(selection, preserve){
            //$$("list_of_records_template").load("http://localhost:3000/template");
            $$("list_of_records_template").data = ListOfRecords.templateData.getItem(selection.id)
            //webix.alert(templateData.data.getItem(selection.id));
            /*
            ListOfRecordsupdatedata = $$("datasetA_datatable").getItem(selection.id);
            $$("editdata_form").setValues(updatedata);
            datasetA_popup.show();
             */
            ListOfRecords.popup.show();
        }
    }
};

ListOfRecords.view={
    id:"listOfRecordsView",
    view:"layout",
    rows:[
        ListOfRecords.list
        ,ListOfRecords.datatable
    ]
};
