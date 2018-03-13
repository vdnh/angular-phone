'use strict';
describe('phoneList', function(){
	//Load the module that contains the 'phoneList' component before each test
	beforeEach(module('phoneList'));

	// Test the controller
	describe('phoneListController', function(){
		it('Should create a `phones` model with 3 phones', inject(function($componentController){
			var ctrl = $componentController('phoneList');
			expect(ctrl.phones.length).toBe(3);
		}));
	});
});