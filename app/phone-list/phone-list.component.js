'user strict';

angular.
	module('phoneList').
	component('phoneList', {
		  /*
      template:
			'<ul>' +
    			'<li ng-repeat="phone in $ctrl.phones">' + 
      			'<span>{{phone.name}}</span>' + 
      			'<p>{{phone.snippet}}</p>' + 
    			'</li>' + 
    			'<p>Total of phones : {{phones.length}}  from the stock of {{$ctrl.name}}</p>' +
  			'</ul>',//*/
        templateUrl : 'phone-list/phone-list.template.html',
  		controller: function PhoneListController(){
  			this.phones = [
  				{
  					name : 'Nexus S',
  					snippet : 'Fast just got faser with Nexus'
  				},
  				{
  					name : 'Motorola S',
  					snippet : 'The next generation'
  				},
  				{
  					name : 'Motorola TB',
  					snippet : 'Tablet for the world.'
  				}
  			];
  			this.name = 'vo dinh';
  		}

	});