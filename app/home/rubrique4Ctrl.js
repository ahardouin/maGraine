(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("Rubrique4Ctrl", Rubrique4Ctrl);

	function Rubrique4Ctrl($scope) { 
		var vm = this;
		vm.texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	}
	
})();