(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("HomeCtrl", HomeCtrl);

	function HomeCtrl($scope, $controller) { 
		var vm = this;
		
		// labels
		vm.titreTachesGulp = "Tâches GULP du projet"
		vm.texteTachesGulp = "Différentes tâches pour servir le projet, reloader les fichiers, distribuer le projet."	
		vm.titreJscdoc3 = "Génération de la JSDOC";
		vm.jsdoc3="La tâche gulp docGulpFile permet la génération de la documentation ";
		vm.titreDndNgInclude = "Drag and Drop avec angular-drag-and-drop-lists";
		vm.texteDndNgInclude = "Test de Drag and Drop avec librairie angular-drag-and-drop-lists. Les composants à déplacer sont intégrés avec NgInclude";
		vm.dndNgIncludeLabel = "DND avec ng-include"; // lien vers page dnd ng include
		
		// champs
		vm.dndNgInclude = "dndNgInclude"; // state
		
	}
	
})();
