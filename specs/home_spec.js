describe('Test End 2 End - Page Home', function() {
	
	beforeEach(function (){
		browser.get('http://localhost:8080');
	});
		
	// test titre de la page
	it('doit avoir un titre', function () {
		expect(browser.getTitle()).toEqual('Graine');
	});
	
});