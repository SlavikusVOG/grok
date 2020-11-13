let Settings = {};

Settings.form ={
    view:"form"
    ,id:"settings_form"
    ,elements:[
        {view:"text", name:"groupName", label:"Group"}
    ]
}

Settings.fileUploader = {
    view:"uploader"
    ,id: "fileUploader"
    ,value:"Upload file"
    , name:"files"
    ,link:"mylist"
    ,upload:"http://localhost:3000/upload"
    //,datatype:"json"
}

Settings.myList = {
    view:"list"
    ,id:"myList"
    ,type:"uploader"
}

Settings.getValueButton = {
    view:"button"
    ,id:"getValueButton"
    , label: "Get value"
    , click: function(){
        let text = this.getParentView().getParentView().getValues();
        text = JSON.stringify(text, "\n");
        webix.message("<pre>"+text+"</pre>")
    }
}
Settings.view_elements = [
    {
        view: "checkbox"
        , id: "settings_view_switch_checkbox"
        , labelRight: "Switch controls"
        , value: 0
    }
]



Settings.view_toolbar = {
    view:"toolbar"
    ,id:"settings_view_toolbar"
    ,elements:Settings.view_elements
    ,elementsConfig:{
        on:{
            onChange:function(){
                if(this.getValue() == 1){
                    $$("settings_view_col1").hide();
                    $$("settings_view_col2").show();
                    //$$("fileUploader").hide();
                    //$$("myList").hide();
                    //$$("getValueButton").hide();
                    //$$("settings_view_datatable").show();
                    //$$("settings_form").show();
                }
                if(this.getValue() == 0){
                    $$("settings_view_col1").show();
                    $$("settings_view_col2").hide();
                    //$$("fileUploader").hide();
                    //$$("myList").hide();
                    //$$("getValueButton").hide();
                    //$$("settings_view_datatable").show();
                    //$$("settings_form").show();
                }
                $$("settings_view").refresh();
            }
        }
    }
}

Settings.datatable = {
    view:"datatable"
    ,id:"settings_view_datatable"
    ,columns:[
        {id: "groupName", header: ["Group name", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "musicStyle", header: ["Music style", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "composition", header: ["Compositions", {content:"textFilter"}], fillspace: true, sort:"string"},
        {id: "groupCreationDate", header: ["Group creation date", {content:"textFilter"}], fillspace: true, sort:"date"},
        {id: "countryOfFoundation", header: ["Country of foundation", {content:"textFilter"}], fillspace: true, sort:"string"}
    ]
}

Settings.view={
    id:"settings_view"
    ,view:"form"
    ,rows:[
        Settings.view_toolbar,
        {
            cols:[
                {
                    id:"settings_view_col1",
                    rows:[
                        Settings.fileUploader
                        ,Settings.myList
                        ,Settings.getValueButton
                    ]
                },
                {
                    id:"settings_view_col2",
                    rows:[
                        Settings.datatable
                        ,Settings.form
                    ]
                }
            ]
        }
    ]
}

