//'use strict';

//angular.module('myapp')
//  .controller('mainCtrl', function () {

//      var main = this;     
      
//      main.fname = 'arun';
//      main.lname = 'naik';

//  });

(function () {
    'use strict';
    var controllerId = 'mainCtrl';
    angular.module('myapp').controller(controllerId, ['$route', mainCtrl]);

    function mainCtrl($rootScope) {

        var vm = this;

       vm.fname = 'arun';
       vm.lname = 'naik';
       vm.showMain1 = true;

       vm.showPage = function ()
       {
           vm.showMain1 = true;
           vm.showMain2 = true;
           vm.showMain3 = false;
       }

    };

})();