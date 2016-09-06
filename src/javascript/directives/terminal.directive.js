(function() {
    'use strict';

    angular
        .module('portfolioApp')
        .directive('terminalDirective', terminalDirective);

    /** @ngInject */
    function terminalDirective() {

        var directive = {
            link: link,
            restrict: 'EA'
        };

        return directive;

        function link(scope, el, attr) {
            el.find('input')[0].focus();
            el.find('input').on('blur', function () {
                setTimeout(function(){
                    el.find('input')[0].focus();
                }, 1);
            });

            var submit = function(log){
                scope.vm.searchTerm = log;
                scope.$apply();
            }

            el.find('input')[0].addEventListener("keydown", function(event){
                var keypressed = event.keyCode || event.which;
                if (keypressed == 13) {
                    event.preventDefault();
                    submit(el.find('input').val());
                    el.find('input').val('');
                }
            });
        }
    }

})();
