(function () {
    'use strict';

    /**
     *
     * @module BASE_APP - Header Controller
     * @description
     * Header Controller - Header controller for Header view functionality
     *
     **/

    angular.module('BASE_APP')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope'];

    function HeaderController ($scope) {


        $scope.init = function(){

            //init functionality

        };

        $scope.init();



    }

})();
