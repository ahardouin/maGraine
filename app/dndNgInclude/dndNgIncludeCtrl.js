(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("DndNgIncludeCtrl", DndNgIncludeCtrl);

	function DndNgIncludeCtrl($scope, $controller) { 
		var vm = this;
		vm.models = {
	        selected: null,
	        lists: {"A": [{label: "Rubrique 1", include:"app/dndNgInclude/rubrique1.html"},
	                      {label: "Rubrique 2", include:"app/dndNgInclude/rubrique4.html"}
	                      ], 
	                "B": [{label: "Rubrique 3", include:"app/dndNgInclude/rubrique3.html"},
	                      {label: "Rubrique 4", include:"app/dndNgInclude/rubrique2.html"}]}
	    };

	    // Model to JSON for demo purpose
	    $scope.$watch('vm.models', function(model) {
	    	//rubrique2Ctrl.createGraphique();	
	    	vm.modelAsJson = angular.toJson(model, true);
	    }, true);
	}
	
})();
