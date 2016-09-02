(function() {
	'use strict';

	angular
    	.module('portfolioApp', ['ngRoute'])
    	.config(config)
    	.run(run);

    /** @ngInject */
	function config($routeProvider, $locationProvider) {

        var pagesDir = '/public/partials/';

        $routeProvider.
           when('/', {
               templateUrl: pagesDir + 'index.html',
               controller: 'HomeController',
               controllerAs: 'vm',
           }).
           when('/about', {
               templateUrl: pagesDir + 'about.html',
               controller: 'AboutController',
               controllerAs: 'vm'
           }).
           otherwise({
               redirectTo: '/',
           });
	}

    /** @ngInject */
	function run($rootScope) {

		angular.element(document).ready(function () {
			$rootScope.$emit('ready'); // Ready!
            console.log('ready');
		});
	}

})();
