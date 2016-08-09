(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("SideBarCtrl", SideBarCtrl);
	
	/**
	 * @function SideBarCtrl - Controlleur bare de navigation 
	 * @param $scope
	 * @param $controller
	 * @param $location
	 * @param $state
	 */
	function SideBarCtrl($scope, $controller, $location, $state) { 
		var vm = this
		
		// fields
		vm.accueil = "home";
		vm.dndNgInclude = "dndNgInclude";
		vm.dndViewsUIRouter = "dndViewsUIRouter.rubriques";
		// labels
		vm.accueilLabel = "Accueil";
		vm.accueilUrl = $state.get("home").url;
		vm.dndNgIncludeLabel = "DND avec ng-include";
		vm.dndNgIncludeUrl = $state.get("dndNgInclude").url;
		vm.dndViewsUIRouterLabel = "DND avec multiples vues (UIRouter)";
		vm.dndViewsUIRouterUrl = $state.get("dndViewsUIRouter").url + $state.get("dndViewsUIRouter.rubriques").url;
		// functions
		vm.isActive = isActiveLink;
		
		/**
		 * @function isActiveLink
		 * @param viewLocation
		 * Fonction qui renvoit true si la page passée en parametre est active
		 */
		function isActiveLink(viewLocation) { 
			console.log("viewLocation : " + viewLocation);
			console.log("$location.url() : "  + $location.url());
	        return viewLocation === $location.path();
	    };
	}
})();
