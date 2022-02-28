sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("ns.controles.controller.ProductoDetails", {

        onInit: function () {

        },


        onShowTabMedidas: function () {
            var oJSONModelConfig = this.getView().getModel("jsonModelConfig");
            oJSONModelConfig.setProperty("/visibleTabMedidas", true);
            oJSONModelConfig.setProperty("/visiblebtnShowTabMedidas", false);
            oJSONModelConfig.setProperty("/visiblebtnHideTabMedidas", true);
          

        },

        onHideTabMedidas: function (){
            var oJSONModelConfig = this.getView().getModel("jsonModelConfig");
            oJSONModelConfig.setProperty("/visibleTabMedidas", false);
            oJSONModelConfig.setProperty("/visiblebtnShowTabMedidas",true);
            oJSONModelConfig.setProperty("/visiblebtnHideTabMedidas", false);
          
        },

        onShowTabGeneral: function () {
            var oJSONModelConfig = this.getView().getModel("jsonModelConfig");
            oJSONModelConfig.setProperty("/visibleTabGeneral", true);
            oJSONModelConfig.setProperty("/visiblebtnShowTabGeneral", false);
            oJSONModelConfig.setProperty("/visiblebtnHideTabGeneral", true);
          

        },

        onHideTabGeneral: function (){
            var oJSONModelConfig = this.getView().getModel("jsonModelConfig");
            oJSONModelConfig.setProperty("/visibleTabGeneral", false);
            oJSONModelConfig.setProperty("/visiblebtnShowTabGeneral",true);
            oJSONModelConfig.setProperty("/visiblebtnHideTabGeneral", false);
          
        },
    });
}); 