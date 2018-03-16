'user strict';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
//<<<<<<< HEAD
    controller: ['$http',function PhoneListController($http) {
//=======
  //  controller: function PhoneListController($http) {
//>>>>>>> c14bc49a8a5574f5e7b9fb011017f305f849ec79
      var self = this;
      self.orderProp = 'age';
      $http.get('phones/phones.json').then(function(response){
        self.phones = response.data;
      });
//<<<<<<< HEAD
    }]
//=======
  //  }
//>>>>>>> c14bc49a8a5574f5e7b9fb011017f305f849ec79
  });