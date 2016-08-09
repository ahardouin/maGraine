(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("Rubrique1Ctrl", Rubrique1Ctrl);

	function Rubrique1Ctrl($scope) { 
		var vm = this;
		vm.titre = "Rubrique 1";
	}
	
})();
