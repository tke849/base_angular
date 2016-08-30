(function () {
    'use strict';

    /**
     *
     * @module Core Components
     * @description
     * Loads Angular Modules and Third Party Modules
     *
     **/

    angular


        .module('BASE_APP', [
            'ngAnimate',
            'ngTouch',
            'ngCordova',
            'ui.router',
            'restangular',
            'BASE_APP.routes'
        ])
        .config(function ($urlRouterProvider, $locationProvider) {

            /**
             *
             * @name $locationProvider
             * @description
             * Location Provider Setting -Set to true for HTML5 mode, allows removal of # from url for cleaner urls.
             *
             **/

            if(!window.cordova){
                $locationProvider.html5Mode(true);
            }




        }).run(function ($rootScope, $timeout, $state) {


            /**
             *
             * @function navigate()
             * @description
             * angular navigation hack
             *
             **/

            $rootScope.navigate = function (state, params) {
                $timeout(function () {
                    $state.go(state, params);
                }, 0);
            };

        });

})();