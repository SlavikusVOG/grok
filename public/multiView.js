let MultiView = {}

MultiView.main_multiview={
    id:"main_multiview",
    view:"multiview",
    cells:[
        DatasetA.view
        ,DatasetB.view
        ,ListOfRecords.view
        ,Settings.view
    ]
};


/*
function syncdatasetA_datatable(viewId){
    $$(viewId).data.sync($$("datasetA_datatable"),()=>{});
}

 */
