'use strict';

describe('PhoneListController', function () {

	beforeEach(module('phonecatApp'));
	/*
	it('should create a phones model with 3 phones', function() {
		var scope = {};
		var ctrl =  new PhoneListController(scope);

		expect(scope.phones.length).toBe(3);
	});
	//*/
	//*
	it('should create a phones model with 3 phones', inject(function($controller){
		var scope = {};
		var ctrl =  $controller('PhoneListController',{$scope:scope});

		expect(scope.phones.length).toBe(3);

		expect(scope.name).toBe('vo dinh')
	}));
	//*/

});