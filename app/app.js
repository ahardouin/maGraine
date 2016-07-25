(function() {
	"use strict";
	angular.module("magraine", ['ui.router','ui.bootstrap','dndLists']);
		
	angular.module("magraine").config(
			function($stateProvider, $urlRouterProvider, $locationProvider) {
				
				$locationProvider.html5Mode(true);

				$urlRouterProvider.otherwise("/home");

				$stateProvider.state("home", {
					url : "/home",
					templateUrl : "app/home/home.html"
				});
			});
	
})();