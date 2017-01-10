// script.js

    // create the module and name it websiteApp
        // also include ngRoute for all our routing needs
    var websiteApp = angular.module('websiteApp', ['ngRoute']);

    // configure our routes
    websiteApp.config(function($routeProvider) {
        $routeProvider

            //route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/playedGames2016', {
                templateUrl : 'gamesList2016.html',
                controller  : 'playedGames2016Controller'
            });
    });

    // create the controller and inject Angular's $scope
    websiteApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    websiteApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    websiteApp.controller('playedGames2016Controller', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });