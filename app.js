angular.module('portfolio', []);


angular.module('portfolio')
	.factory('factoryPortfolio', [function() {

			var galleryPortfolio = [
				{	
					title 		: 'Music Seen',
					concept		: 'What is data? How it can be represented in useful formats? Music Seen offers a visual representation of music trends in map views. Find out current trends in genres and number of plays per country. Also offers a portal for Band management to login and post tour dates which the public can see who is playing near them.',
					background	: 'RefactorU Final project: ',
					backgroundDet	: '9 days from concept to presentation.',
					devTools	: 'MEAN Stack (MongoDB, express.js, AngularJS, Node.js), RESTful API integration with LastFM, GeoJSON, CSS3, HTML5, Bootstrap, served from Digital Ocean.',
					liveLink	: 'http://104.236.139.235/'
				},
				{	
					title 		: 'Apres Ski Hub',
					concept		: 'Provides the key touchpoints for an outdoor enthusiast looking for a full day\'s experience - on and off the mountain. Combines snow and weather report, events & promotions, and traffic conditions; which normally requires at least 3-4 applications.',
					background	: 'RefactorU MidTerm project: ',
					backgroundDet	: '4 days from concept to presentation.',
					devTools	: 'AngularJS, JSON, CSS3, HTML5, Bootstrap.',
					liveLink	: 'http://1pt21gwprod.com/refactor/apres/index.html'
				},
				{	
					title 		: 'Restaurant',
					concept		: 'Build a simple restaurant interface which displays menu information based on user dietary preference input.',
					background	: 'Group Coding Exercise: ',
					backgroundDet	: '2 days from concept to presentation.',
					devTools	: 'AngularJS, CSS3, HTML5, Bootstrap.',
					liveLink	: 'http://1pt21gwprod.com/refactor/restaurant/main.html'
				},
				{	
					title 		: 'LITSCO',
					concept		: 'Complete overhaul, design, and development of website. Commercial building products distributor and metal fabricator needs to showcase their products and highlight services.  ',
					background	: '2013 to current: ',
					backgroundDet	: 'Added eCommerce and client portal after initial release of site.',
					devTools	: 'Adobe MUSE, CSS, ECWID.',
					liveLink	: 'http://www.litsco.com'
				},

			]
			return {
					galleryPortfolio: galleryPortfolio,
			}
	}]);	

angular.module('portfolio')
	.controller('galleryPortfolio', ['$scope', 'factoryPortfolio', function($scope, factoryPortfolio) {

			$scope.carouselPortfolio = factoryPortfolio.galleryPortfolio;

			$scope.activePortfolio = 2;
			$scope.hidden = 3

				$scope.nextSlide = function() {
				if($scope.activePortfolio !== $scope.carouselPortfolio.length-1) {
					$scope.activePortfolio++
					$scope.hidden = $scope.hidden - 3
					}
				}

			$scope.prevSlide = function() {
				if($scope.activePortfolio > 2) {
					$scope.activePortfolio--
					$scope.hidden = $scope.hidden + 3
				}
			}
}]);