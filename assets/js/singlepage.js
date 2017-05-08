// script.js

    // create the module and name it singlePageApp
        // also include ngRoute for all our routing needs
    var singlePageApp = angular.module('singlePageApp', ['ngRoute']);

    // configure our routes
    singlePageApp.config(function($routeProvider) {
        $routeProvider

            //route for the home page
            .when('/top', {
                templateUrl : 'home.html',
            })

            // route for the about page
            .when('/resume', {
                templateUrl : 'resume.html',
            })

            // route for the contact page
            .when('/gamesList', {
                templateUrl : 'gamesListContainer.html',
            });
    });
