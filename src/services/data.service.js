(function () {
    'use strict';


    angular.module('BASE_APP')

    /**
     *
     * @module JWVR - DATA API Base
     * @description
     * Config Base URL for DATA API
     *
     **/


        .factory('DataAPI', function(Restangular) {
            return Restangular.withConfig(function(RestangularConfigurer) {

                /**
                 *
                 * @name base status API Url
                 * @description
                 * sets Restangular Base URL for this service
                 *
                 **/

                /** TODO this will become the full url for the website, not set yet so I can use on dev,
                 * full URL necessary for the APP to point to our php file on server **/
                RestangularConfigurer.setBaseUrl('http://homedepotapi.local/');

            });
        })

    /**
     *
     * @module BASE_APP - Data Service
     * @description
     * Data Service - service calls to return documents and info.
     *
     **/


        .service('DataService', DataService);

    DataService.$inject = ['DataAPI', '$q'];

    function DataService(DataAPI, $q) {

        return {

            /**
             *
             * @funciton getTypes()
             * @description
             * Get list of available types of products
             *
             **/

            getData: function () {

                var deferred = $q.defer();

                DataAPI.one('').get()
                    .then(function(response){
                        deferred.resolve(response);
                    }, function(response){
                        deferred.reject(response);
                    });

                return deferred.promise;

            }



        };
    }

})();