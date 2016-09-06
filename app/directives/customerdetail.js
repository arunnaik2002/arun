(function () {
    'use strict';

    var app = angular.module('myapp');
    app.directive('customerDetail',[
        function () {
            return {
                restrict: 'E',
                
                templateUrl: 'app/directives/customerdetail.html'
                
            }
        }
    ]);
})();