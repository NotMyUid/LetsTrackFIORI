/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"lt/appfiori/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});