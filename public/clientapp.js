let clientapp = function(){
    webix.ready(function (){
        webix.ui({
            cols:[
                Menu.main_sidebar,
                MultiView.main_multiview
            ]
        }).show();
        $$("list_of_records").sync($$("datasetA_datatable"));
        $$("settings_view_datatable").sync($$("datasetA_datatable"));
    });
}

