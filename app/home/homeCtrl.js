(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("HomeCtrl", HomeCtrl);

	function HomeCtrl($scope, $controller) { 
		var vm = this;
		vm.titreTachesGulp = "Tâches GULP du projet"
		vm.texteTachesGulp = "Différentes tâches pour servir le projet, reloader les fichiers, distribuer le projet."	
		vm.titreJscdoc3 = "Génération de la JSDOC";
		vm.jsdoc3="La tâche gulp docGulpFile permet la génération de la documentation ";
	}
	
})();
