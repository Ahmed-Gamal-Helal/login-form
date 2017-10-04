var contactGallery = angular.module('contactGallery', ['ngRoute']);

contactGallery.controller('contactGallery', function() {
   // Start as not visible but when link is tapped it will show as true 
    $scope.visible = true;
});

contactGallery.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'galleryController'
        })
        .when('/addEdit', {
            templateUrl: 'views/addEdit.html',
            controller: 'myCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');
});
