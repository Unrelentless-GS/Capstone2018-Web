var app = angular.module("spotifyApp", []);
app.controller("getCtrl",
	function ($scope, $http) {
		$http.get('data/tracks.json')
			.then(function (response) {
					$scope.tracks = response.data;
				}
			);
	});
