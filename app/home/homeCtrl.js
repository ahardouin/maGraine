(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("HomeCtrl", HomeCtrl);

	function HomeCtrl($scope, $controller) { 
		var vm = this;
		//var rubrique2Ctrl = $controller("Rubrique2Ctrl",{$scope: $scope});
		vm.models = {
	        selected: null,
	        lists: {"A": [{label: "Rubrique 1", include:"app/home/rubrique1.html"},
	                      {label: "Rubrique 2", include:"app/home/rubrique4.html"}
	                      ], 
	                "B": [{label: "Rubrique 3", include:"app/home/rubrique3.html"},
	                      {label: "Rubrique 4", include:"app/home/rubrique2.html"}]}
	    };

	    // Model to JSON for demo purpose
	    $scope.$watch('vm.models', function(model) {
	    	//rubrique2Ctrl.createGraphique();	
	    	vm.modelAsJson = angular.toJson(model, true);
	    }, true);
	}
	
})();
