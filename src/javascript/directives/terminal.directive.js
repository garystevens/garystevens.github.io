(function() {
    'use strict';

    angular
        .module('portfolioApp')
        .directive('terminalDirective', terminalDirective);

    /** @ngInject */
    function terminalDirective(ProfileService) {

        var directive = {
            link: link,
            restrict: 'EA'
        };

        return directive;

        function link(scope, el, attr) {
            //var fuckbags = ProfileService.getProfileData()
            //console.log('Example Directive - 1', fuckbags);
        }
    }

})();
