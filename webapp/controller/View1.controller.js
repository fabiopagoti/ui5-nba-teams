sap.ui.define(
	[
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		"use strict";

		return Controller.extend("ovly.app.controller.View1", {
			onInit: function () {
				let sURL = 'https://www.balldontlie.io/api/v1/teams';
				let oTeams = new sap.ui.model.json.JSONModel(sURL);
				this.getView().setModel(oTeams);
			},
		});
	}
);
