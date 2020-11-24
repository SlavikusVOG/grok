let DatasetA = {};

//editdata_form - form for editing data from datasetA_datatable
DatasetA.editdata_form = {
    view:"form",
    id:"editdata_form",
    elements:[
        {view:"text", label:'Group name', name:"groupName"},
        {view:"text", label:'Music style', name:"musicStyle"},
        {view:"text", label:'Compositions', name:"composition"},
        {view:"text", label:'Group creation date', name:"groupCreationDate", editor:"date"},
        {view:"text", label:'Country of foundation', name:"countryOfFoundation"},
        {id:"save_editdata", view:"button", label:"Save", click:DatasetA.setDatasetA}
    ],
    fillspace:true,
    on:{
        onAfterLoad:function(){
        }
    }
};

//popup - display editdata_form with data which user select on datasetA_datatable
DatasetA.popup = {
    view:"popup",
    id:"datasetA_popup",
    head:false,
    body:webix.copy(DatasetA.editdata_form)
};

//datasetA_datatable - display dataset with information about groups
DatasetA.datatable = {
    id:"datasetA_datatable",
    view:"datatable",
    select:"row",
    autoconfig: true,
    columns:[
        {id: "groupName", header: ["Group name", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "musicStyle", header: ["Music style", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "composition", header: ["Compositions", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "groupCreationDate", header: ["Group creation date", {content:"textFilter"}], fillspace: true, sort:"date", format:webix.Date.dateToStr("%d-%m-%Y")},
        {id: "countryOfFoundation", header: ["Country of foundation", {content:"textFilter"}], fillspace: true, sort:"string"}
    ],
    url:"http://localhost:3000/maindata",
    scheme:{
        $init:function(obj){
            let indexOfT = obj.groupCreationDate.indexOf('T');
            obj.groupCreationDate = obj.groupCreationDate.slice(0,indexOfT);
            //obj.groupCreationDate = webix.i18n.parseFormatDate(obj.groupCreationDate);
            //alert(obj.groupCreationDate);
        }
    },

    on: {
        //after select row display form with data for edit
        onAfterSelect: function (selection, preserve) {

            /*
            let updatedata = $$("datasetA_datatable").getItem(selection.id);
            $$("editdata_form").setValues(updatedata);
            datasetA_popup.show();

             */
            $$("editdata_form").bind($$("datasetA_datatable"));
            DatasetA.popup.show();
        }
    },
    save:"rest->http://localhost:3000/maindata"
}

DatasetA.toolbar = {
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
}

// datasetA_view - consist of toolbar with export and refresh buttons and datatable with information about groups
DatasetA.view={
    id:"datasetA_view",
    view: "layout",
    rows:[
        DatasetA.toolbar
        ,DatasetA.datatable
    ]
};

DatasetA.setDatasetA = function (){
    let updatedData = $$("editdata_form").getValues();
    $$("datasetA_datatable").updateItem(updatedData.id, updatedData);
    $$("datasetA_popup").hide();
}
