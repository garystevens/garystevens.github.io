(function() {
	'use strict';

	angular
		.module('portfolioApp')
        .factory('ProfileService', ProfileService);

        function ProfileService($q){

            var searchTerms = {
                'about': {
					'responses': [
						'test'
					]
				},
				'start': {
					'responses': [
						'welcome',
						'type "help" for more',
						'information',
						'.......',
						'PROCESSING',
						'END',
						' '
					]
				},
                'work': {
					'responses': [
						'one',
						'two',
						'three',
						'...four',
						'five',
						'six',
						'seven',
						'eight...',
					]
				},
                'contact': {
					'responses': [
						'email: garymstevens@gmail.com',
						'twitter: @garymstevens',
						'github: https://github.com/garystevens',
						' '
					]
				},
				'help': {
					'responses': [
						'you can use the following commands...',
						' ',
						'work',
						'contact',
						'about',
						' '
					]
				},
				'cd ../': {
					'responses': [
						'nice try',
						' '
					]
				}
            };

			function checkTerm(searchTerm){
				return searchTerms[searchTerm];
			}

			return {
				checkTerm: checkTerm
		    };
        }
})();
