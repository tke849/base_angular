(function () {
    'use strict';

    /**
     *
     * @module BASE_APP - Main Directives and Filters
     * @description
     * Main directives and Filters for Angular App
     *
     **/


    angular.module('BASE_APP')


    /**
     *
     * @name safe html bind filter
     * @description
     * allows for html elements in ng-bind-html safely
     *
     **/

        .filter('safeHtml', ['$sce', function($sce){
            return function(text) {
                return $sce.trustAsHtml(text);
            };
        }])

    /**
     *
     * @name lowerDash
     * @description
     * strop text down to url usable variable...  i.e. My Amazing Variable -> my-amazing-variable
     *
     **/

        .filter('lowerDash', function() {
            return function(input) {

                var name = input.value.toLowerCase();
                name = name.replace(' ', '-');
                return name;

            }
        })

    ;


})();