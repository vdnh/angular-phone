'use strict';

angular.module('phoneDetail').
        component('phoneDetail', {
            template: 'TBD: Detait view for <span>{{ctrl.phoneId}}</span>',
            controller: ['$routeParams',
                function PhoneDetailController($routeParams){
                    this.phoneId = $routeParams.phoneId;
                }
            ]
        });
