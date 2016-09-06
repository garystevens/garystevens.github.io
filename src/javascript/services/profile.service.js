(function() {
	'use strict';

	angular
		.module('portfolioApp')
        .factory('ProfileService', ProfileService);

        function ProfileService($q){

			var d = new Date;

			Number.prototype.padLeft = function(base,chr){
    			var  len = (String(base || 10).length - String(this).length)+1;
    			return len > 0? new Array(len).join(chr || '0')+this : this;
			}

    		var dformat = [(d.getMonth()+1).padLeft(),
               d.getDate().padLeft(),
               d.getFullYear()].join('/') +' ' +
              [d.getHours().padLeft(),
               d.getMinutes().padLeft(),
               d.getSeconds().padLeft()].join(':');

            var searchTerms = {
                'about': {
					'responses': [
						' ',
						'For the last 3 years I have specialised in leading technical ',
						'teams in delivery, whilst also helping creative teams refine and hone digital ideas. ',
						'I am passionate about technology and enjoy the thrill of ',
						'the impossible challenge. I believe in championing great work and the craft required to ',
						'deliver it. I am a driven, motivated ',
						'person who enjoys continually pushing my skills and learning. ',
						'I also enjoy sharing this knowledge and enjoy talking at meet-ups whenever possible. ',
						' ',
						' /root '
					]
				},
				'start': {
					'responses': [
						' ',
						'login: usr anon on ' + dformat + ' to term',
						'Counting objects: done.',
						'Compressing objects: 100% (5/5), done.',
						'Writing objects: 100% (5/5), 1.44 KiB | 0 bytes/s, done.',
						'Resolving Host......',
						'RESOLVED',
						' ',
						'> Welcome',
						'type "help" for more',
						'information',
						'.......',
						'END',
						' ',
						' /root '
					]
				},
                'work': {
					'responses': [
						' ',
						'> Current ',
						'Tech Lead @ Havas London',
						' ',
						'http://www.chivas.com/en/the-venture',
						'http://www.mclaren.com/formula1/',
						'https://www.ballantinesgolfclub.com/en/',
						'Durex',
						' ',
						'> Previous',
						'Developer @ Specialmoves',
						'Wacom',
						'Rolex',
						' ',
						'/root '
					]
				},
                'contact': {
					'responses': [
						' ',
						'email: garymstevens@gmail.com',
						'twitter: @garymstevens',
						'github: https://github.com/garystevens',
						'linkedIn: https://www.linkedin.com/in/gary-stevens-36958622',
						' ',
						' /home '
					]
				},
				'help': {
					'responses': [
						'> You can use the following commands...',
						' ',
						'work',
						'contact',
						'about',
						' ',
						' /root '
					]
				},
				'cd ../': {
					'responses': [
						'> Nice try',
						' ',
						' /root '
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
