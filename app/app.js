(function() {
	"use strict";
	angular.module("magraine", ['ui.router','ui.bootstrap','dndLists']);
		
	angular.module("magraine").config(
			function($stateProvider, $urlRouterProvider) {
				
				$urlRouterProvider
					.when("","/home")
					.when("dndViewsUIRouter","/dndViewsUIRouter")
					.otherwise("/home");

				$stateProvider.state("home", {
					url : "/home",
					templateUrl : "/app/home/home.html"
					
				});
				
				$stateProvider.state("dndViewsUIRouter", {
					url : "/dndViewsUIRouter",
					templateUrl : "/app/dndViewsUIRouter/dndViewsUIRouter.html"
					
				});
				
				$stateProvider.state("dndNgInclude", {
					url : "/dndNgInclude",
					templateUrl : "/app/dndNgInclude/dndNgInclude.html"
					
				});
			});
	
})();