(function() {
	'use strict';

	angular
		.module('portfolioApp')
		.controller('HomeController', HomeController);

	/** @ngInject */
	function HomeController($scope, ProfileService) {
		var vm = this;

		vm.history = [];
		vm.searchTerm = "start";
		var count = 0;

		function printLine(messages, messageLength){
			setTimeout(function(){

				vm.history.push({
					"term": messages[count]
				});

				$scope.$apply();

				if(count < messageLength-1){
					printLine(messages, messageLength);
					count++;
				} else {
					count = 0;
				}

			}, 400);
		}

		$scope.$watch(
            "vm.searchTerm",
            function(newValue, oldValue) {

				vm.history.push({
					"term": newValue
				});

				var returnVal = ProfileService.checkTerm(newValue);

				if((typeof returnVal) === 'undefined'){
					vm.history.push({
						"term": "Unknown command - type 'help' for more information"
					});
				} else {
					printLine(returnVal.responses, returnVal.responses.length);
				}
            }, true);
    }
})();
