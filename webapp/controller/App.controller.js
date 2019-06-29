sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {
		
		onInit : function () {
			// set data model on view
			var JSONData = {
				word:  "Hello World",
				name: "John Doe",
				qorbobo: "Qorbobogim oppoq"
				
			};
			var oModel = new JSONModel(JSONData);
			this.getView().setModel(oModel, "jsonGet");
		},
		
		onPress: function () {
			MessageToast.show("This is message");
		},
		
		onClick: function(){
			var oData = this.getView().getModel("jsonGet").getData();
			var value = this.byId("inputID").getValue();
			if(oData[value]){
				MessageToast.show("Word exists in model");
			}else{
				MessageToast.show("Word does not exist");
			}
			
		}
	});
});

 