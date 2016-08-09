(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("DndNgViewUIRouterCtrl", DndNgViewUIRouterCtrl);

	function DndNgViewUIRouterCtrl($scope) { 
		var vm = this;
		
		vm.models = {
	        selected: null,
	        lists: {"A": [{label: "Rubrique 1", view:"rubrique1"},
	                      {label: "Rubrique 2", view:"rubrique2"}
	                      ], 
	                "B": [{label: "Rubrique 3", view:"rubrique3"},
	                      {label: "Rubrique 4", view:"rubrique4"}]}
	    };

	    // Model to JSON for demo purpose
	    $scope.$watch('vm.models', function(model) {
	    	//rubrique2Ctrl.createGraphique();	
	    	vm.modelAsJson = angular.toJson(model, true);
	    }, true);
	}
	
})();
