sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("lt.appfiori.controller.Index", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit : function () {
			

		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/**
		 * Triggered by the table's 'updateFinished' event: after new table
		 * data is available, this handler method updates the table counter.
		 * This should only happen if the update was successful, which is
		 * why this handler is attached to 'updateFinished' and not to the
		 * table's list binding's 'dataReceived' method.
		 * @param {sap.ui.base.Event} oEvent the update finished event
		 * @public
		 */
		onUpdateFinished : function (oEvent) {
			
		},

	

		/**
		 * Event handler for navigating back.
		 * Navigate back in the browser history
		 * @public
		 */
		onNavBack : function() {
			// eslint-disable-next-line sap-no-history-manipulation
			history.go(-1);
		},

        
        onOrders : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("worklist");
        },
        
        onHistory : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("history");
        },

        onUser : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("customer");
        },        

        onHub : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("hub");
        },

        onCarrier : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("carrier");
        },

        onRoute : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("route");
        },

        onSub_Route : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("sub_route");
        },        

        onConnections : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("connections");
        },

        onCity : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("city");
        },

        onOrdersStatistics : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("ordstat");
        },

        onHistoryStatistics : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("history_statistics");
        },

        onCustomerStatistics : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("customer_statistics");
        },

        onRouteStatistics : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("route_statistics");
        },

        onSub_RouteStatistics : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("sub_route_statistics");
        },

        onConnectionStatistics : function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("connection_statistics");
        },

        onStatCust : function (oEvent) {
            var that = this;
            
			that.getRouter().navTo("email", {
                emailId: "('"+oEvent.getParameter("query")+"')"
            });
		
        }

	});
});