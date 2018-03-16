'use strict';
describe('phoneList', function(){
	//Load the module that contains the 'phoneList' component before each test
	beforeEach(module('phoneList'));

	// Test the controller
	describe('phoneListController', function(){
		var ctrl, $httpBackend;
		beforeEach(inject(function($componentController, _$httpBackend_){
                    $httpBackend = _$httpBackend_;
                    $httpBackend.expectGet('phones/phones.json')
                            .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
                    ctrl = $componentController('phoneList');
		}));
		
		it('should create a `phones` property with 2 phones with `$http`', function(){
			expect(ctrl.phones).toBeUndefined();
                        $httpBackend.flush();
                        expect(ctrl.phones).toEqual([{name: 'Nexus S'},{name: 'Motorola DROID'}]);
		});

		it('should set a default value for the `orderProp` property', function(){
			expect(ctrl.orderProp).toBe('age');
		});
	});
});