(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("SideBarCtrl", SideBarCtrl);

	function SideBarCtrl($scope, $controller, $location, $state) { 
		var vm = this
		
		// fields
		vm.accueil = "home";
		vm.dndNgInclude = "dndNgInclude";
		vm.dndViewsUIRouter = "dndViewsUIRouter";
		// labels
		vm.accueilLabel = "Accueil";
		vm.accueilUrl = $state.get("home").url;
		vm.dndNgIncludeLabel = "DND avec ng-include";
		vm.dndNgIncludeUrl = $state.get("dndNgInclude").url;
		vm.dndViewsUIRouterLabel = "DND avec multiples vues (UIRouter)";
		vm.dndViewsUIRouterUrl = $state.get("dndViewsUIRouter").url;
		// functions
		vm.isActive = isActiveLink;
		
		function isActiveLink(viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}
})();
