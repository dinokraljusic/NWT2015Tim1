/**
 * Created by Dino on 3/22/2015.
 */
'use strict';

var app = angular.module('probna', [
    'ngRoute', 'ui.bootstrap', 'pascalprecht.translate'], ['$translateProvider', function ($translateProvider) {

    // register german translation table
    $translateProvider.translations('bs_BA', {
        'HOME': 'Početna',
        'EDIT_PROFILE': 'Uredi profil',
        'LOGIN': 'Prijava',
        'LOGOUT': 'Odjava'
    });
    // register english translation table
    $translateProvider.translations('en_EN', {
        'HOME': 'Home',
        'EDIT_PROFILE': 'Edit profile',
        'LOGIN': 'Login',
        'LOGOUT': 'Log out'
    });
    $translateProvider.preferredLanguage('bs_BA');
}]);

/*var onloadCallback = function() {
    grecaptcha.render('recaptcha', {
        'sitekey' : '6LcS6gUTAAAAAP4v4dFU6TuttJAasAllXeTVL-Tx'
    });
};*/

/*var app = angular.module('probna', [
    'ngRoute'
]);


app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/login', {
            templateUrl: '/login',
            controller: 'loginController'
        }).
        when('/logout', {
            templateUrl: '/logout'
        }).
        when('/signup', {
            templateUrl: '/signup'
        }).
        when('/resetPassword', {
            templateUrl: '/password_reset/new'
        }).
        when('/profile', {
            templateUrl: '/profile'
        }).
        otherwise({
            redirectTo: '/'
        });
});*/
/*
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/dino', {
                templateUrl: '/login'
            }).
            when('/login', {
                templateUrl: '/login'
            }).
            when('/logout', {
                templateUrl: '/logout'
            }).
            when('/signup', {
                templateUrl: '/signup'
            }).
            when('/resetPassword', {
                templateUrl: '/password_reset/new'
            }).
            when('/profile', {
                templateUrl: '/profile'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);*/


/*
app.factory('Group', ['railsResourceFactory', function (railsResourceFactory) {
    return railsResourceFactory({ url: '/api/groups', name: 'group' });
}]);
*/

/*var mainController = app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


var loginController = app.controller('loginController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});*/

/*var probna = angular.module('probna', ['ngRoute']);

var linkController = angular.module('probna', ['ngRoute']);

//var probna = angular.module('scotchApp', ['ngRoute']);


//loginController = angular.module('probna', []);

// configure our routes
angular.module('probna', ['ngRoute']).config(function($routeProvider, $locationProvider){
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'static_pages/index.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

    // route for the contact page
    .when('/login', {
        templateUrl : "<%= asset_path('sessions/new.html') %> ",
        controller  : 'loginController'
});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
// create the controller and inject Angular's $scope
angular.module('probna', ['ngRoute']).controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

probna.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

probna.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

probna.controller('loginController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});*/
