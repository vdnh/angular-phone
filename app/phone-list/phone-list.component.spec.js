'use strict';
describe('phoneList', function(){
	//Load the module that contains the 'phoneList' component before each test
	beforeEach(module('phoneList'));

	// Test the controller
	describe('phoneListController', function(){
		var ctrl;
		beforeEach(inject(function($componentController){
			ctrl = $componentController('phoneList');
		}));
		
		it('should create a phones model with 3 phones', function(){
			expect(ctrl.phones.length).toBe(3);
		});

		it('should create a phones model with 3 phones', function(){
			expect(ctrl.orderProp).toBe('age');
		});
	});
});