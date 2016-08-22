describe('Test End 2 End - Page DndNgInclude', function() {
	
	var dndNgIncludePage = function(){
		
		var listes = element.all(by.repeater('(listName, list) in vm.models.lists'));
		var listeA = listes.first().all(by.tagName('li'));
		var listeB = listes.last().all(by.tagName('li'));
		var rubrique1 = listeA.first();
		var rubrique2 = listeA.get(1);
		var rubrique3 = listeB.first();
		var rubrique4 = listeB.get(1);
		
		this.get = function(){
			browser.get('http://localhost:8080/#/dndNgInclude');
		};	
		
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
});


