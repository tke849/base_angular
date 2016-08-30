(function () {
    'use strict';


    angular.module('BASE_APP')

    /**
     *
     * @module BASE_APP - Data Factory
     * @description
     * Data Factory - used to manipulate data and return to controller cleansed for view
     *
     **/


        .factory('DataFactory', DataFactory);

    DataFactory.$inject = [];

    function DataFactory() {

        return {


            doSomethingToData: function (data) {

                //manipulate data

                return data;

            },

            doSomethingElseToData: function (moreData) {

                //manipulate data

                return moreData;

            }




        };
    }

})();