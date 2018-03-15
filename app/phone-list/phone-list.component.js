'user strict';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
//<<<<<<< step8
    controller: ['$http',function PhoneListController($http) {
//=======
//    controller: function PhoneListController($http) {
//>>>>>>> master
      var self = this;
      self.orderProp = 'age';
      $http.get('phones/phones.json').then(function(response){
        self.phones = response.data;
      });
//<<<<<<< step8
    }]
//=======
//    }
//>>>>>>> master
  });