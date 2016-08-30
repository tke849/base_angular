(function () {
    'use strict';

    /**
     *
     * @module BASE_APP - Home Controller
     * @description
     * Home Controller - Home controller for Home view functionality
     *
     **/

    angular.module('BASE_APP')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController ($scope) {


        $scope.init = function(){

            //init functionality

        };

        $scope.init();



    }

})();
