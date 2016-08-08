(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("HeaderCtrl", HeaderCtrl);

	function HeaderCtrl($scope, $controller) { 
		var vm = this;
		vm.title="Angular JS - POCs";
	}
	
})();
