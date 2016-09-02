(function() {
	'use strict';

	angular
		.module('portfolioApp')
        .factory('ProfileService', ProfileService);

        function ProfileService($q){

            var searchTerms = {
                'about': '/about',
                'work': '/work',
                'contact': '/contact'
            };

            return {
		        getProfileData: getProfileData
		    };

			function getProfileData(searchTerm){

				//var deferred = $q.defer();

	            //deferred.resolve(response);

				//deferred.reject('Personalisation not set');

				//return deferred.promise;
                return "cunts";
			}
        }
})();
