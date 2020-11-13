let Menu = {};

//main_sidebar - view for display menu
Menu.main_sidebar={
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
