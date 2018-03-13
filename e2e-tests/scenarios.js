'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('phonecatApp', function() {
	describe('phoneList', function(){

  	beforeEach(function() {
    	browser.get('index.html');
  	});

  	it('should filter the phone list as a user types into the search box', function(){
  		var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
  		
  		
  		expect(phoneList.count()).toBe(3);

      var query = element(by.model('$ctrl.query'));

  		query.sendKeys('nexus');
  		expect(phoneList.count()).toBe(1);

		  query.clear();
  		query.sendKeys('Motorola');
  		expect(phoneList.count()).toBe(1);

  	});

  });

});
