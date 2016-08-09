(function() {
	"use strict";
	angular.module("magraine", ['ui.router','ui.bootstrap','dndLists']);
		
	angular.module("magraine").config(
			function($stateProvider, $urlRouterProvider) {
				
				$urlRouterProvider
					.when("","/home")
					.when("dndViewsUIRouter","/dndViewsUIRouter")
					.when("dndNgInclude","/dndNgInclude")
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
				
				$stateProvider.state('dndViewsUIRouter.rubriques', {
					 url: "/rubriques",	
					 parent: "dndViewsUIRouter",
					 views: {
				        'rubrique1': {
				            templateUrl: '/app/dndNgInclude/rubrique1.html'
				        },
				        'rubrique2': {
				            templateUrl: '/app/dndNgInclude/rubrique2.html'
				        },
				        'rubrique3': {
				            templateUrl: '/app/dndNgInclude/rubrique3.html'
				        },
				        'rubrique4': {
				            templateUrl: '/app/dndNgInclude/rubrique4.html'
				        }
					 }
				});
					
				
			});
	
})();