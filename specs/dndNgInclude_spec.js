describe('Test End 2 End - Page DndNgInclude', function() {
	
	var dndNgIncludePage = function(){
		
		var listes = element.all(by.repeater('(listName, list) in vm.models.lists'));
		var listeA = listes.first().all(by.tagName('li'));
		var listeB = listes.last().all(by.tagName('li'));
		var rubrique1 = listeA.first();
		var rubrique2 = listeA.get(1);
		var rubrique3 = listeB.first();
		var rubrique4 = listeB.get(1);
		var dropZoneA = element.all(by.css('ul')).get(0);
		var dropZoneB = element.all(by.css('ul')).get(1);
		var draggable1 = element.all(by.css('li[draggable="true"]')).get(0);
		var draggable2 = element.all(by.css('li[draggable="true"]')).get(1);
		var draggable3 = element.all(by.css('li[draggable="true"]')).get(2);
		var draggable4 = element.all(by.css('li[draggable="true"]')).get(3);
		
		this.get = function(){
			browser.get('http://localhost:8080/#/dndNgInclude');
		};	
		
		this.getProtractor = function(){
			return ptor;
		}
		
		this.getListes = function() {
			return listes;
		};
		this.getListeA = function () {
			return listeA;
		};
		this.getListeB = function () {
			return listeB;
		};
		this.getRubrique1 = function () {
			return rubrique1;
		};
		this.getRubrique2 = function () {
			return rubrique2;
		};
		this.getRubrique3 = function () {
			return rubrique3;
		};
		this.getRubrique4 = function () {
			return rubrique4;
		};
		this.getDropZoneA = function () { return dropZoneA; };
		this.getDropZoneB = function () { return dropZoneB; };
		this.getDraggable1 = function () { return draggable1 };
		this.getDraggable2 = function () { return draggable2 };
		this.getDraggable3 = function () { return draggable3 };
		this.getDraggable4 = function () { return draggable4 };
	}

  it('La page doit contenir deux listes de deux items. Ces items sont draggable', function() {
    var page = new dndNgIncludePage();
    page.get();
    expect(page.getListes().count()).toEqual(2);
    expect(page.getListeA().count()).toEqual(2);
    expect(page.getListeB().count()).toEqual(2);
    expect(page.getRubrique1().getAttribute('draggable')).toEqual('true');
    expect(page.getRubrique2().getAttribute('draggable')).toEqual('true');
    expect(page.getRubrique3().getAttribute('draggable')).toEqual('true');
    expect(page.getRubrique4().getAttribute('draggable')).toEqual('true');
  });
  
  it('La page doit permettre le drag and drop', function (){
	  var page = new dndNgIncludePage();
	  page.get();  
	  var elToDrag = element.all(by.css('li[draggable="true"]')).get(0).getWebElement();
	  var elToDrop = element.all(by.css('li[draggable="true"]')).get(3).getWebElement();
	   
	  

	  /* does not working */
	  //browser.actions().dragAndDrop(elToDrag, elToDrop).mouseUp().perform();
	  
	  /* does not working */
	  browser.actions()
	    .mouseMove(elToDrag)
	    .mouseDown()
	    .dragAndDrop(elToDrag, elToDrop)
	    .moveMove(elToDrop)
	    .mouseUp().perform();
	  
	  
	  expect(page.getListeA().count()).toEqual(1);
	  expect(page.getListeB().count()).toEqual(3);
  });
  
});


