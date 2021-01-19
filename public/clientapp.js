//TODO: Require change to import

require('./menu_data');
require('./datasetA');
require('./datasetB');
require('./listOfRecords');
require('./settings');
require('./menu');
require('./multiView');

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
        //$$("editdata_form").bind($$("datasetA_datatable"));
    });
}

