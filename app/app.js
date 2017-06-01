"use strict";

var app = angular.module("Shrooms", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
            templateUrl: "partials/otherIndex.html",
            controller: 'shroomCtrl'
        })
        .otherwise('/');
});
