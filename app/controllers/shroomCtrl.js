"use strict";

app.controller("shroomCtrl", function($scope, ShroomFactory) {

	let shroomArray = [];
	ShroomFactory.getShrooms()
	.then(function(data) {
		console.log("List of mushrooms", data);
		for (var prop in data){
		shroomArray.push(data[prop]);
		}
		$scope.shrooms = shroomArray;
		console.log(shroomArray);
	});
});