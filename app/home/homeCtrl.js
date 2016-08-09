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
		vm.dndViewsUIRouterLabel = "DND avec multiples vues (UIRouter)";// lien vers page dnd views ui router
		vm.titreDndViewsUIRouter = "Drag and Drop avec vues multiples Angular UI Router";
		vm.texteDndViewsUIRouter = "Test de Drag and Drop avec librairie angular-drag-and-drop-lists. Les composants à déplacer sont intégrés avec des vues multiples angular UI Router";
		
		// champs
		vm.dndNgInclude = "dndNgInclude"; // state
		vm.dndViewsUIRouter = "dndViewsUIRouter.rubriques"; // state
		
	}
	
})();
