(function() {
	'use strict';

	angular
		.module('portfolioApp')
        .factory('ProfileService', ProfileService);

        function ProfileService($q){

            var searchTerms = {
                'about': {
					'responses': [
						'test',
						' ',
						' /home '
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
						' ',
						' /home '
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
						' ',
						' /home '
					]
				},
                'contact': {
					'responses': [
						'email: garymstevens@gmail.com',
						'twitter: @garymstevens',
						'github: https://github.com/garystevens',
						' ',
						' /home '
					]
				},
				'help': {
					'responses': [
						'you can use the following commands...',
						' ',
						'work',
						'contact',
						'about',
						' ',
						' /home '
					]
				},
				'cd ../': {
					'responses': [
						'nice try',
						' ',
						' /home '
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
