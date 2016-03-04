var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){

  $routeProvider

    .when('/heroEntry', {
      templateUrl: '/views/templates/heroEntry.html',
      controller: 'HeroEntryController'
    })
    .when('/heroListRemove', {
      templateUrl: '/views/templates/heroListRemove.html',
      controller: 'HeroListRemoveController'
    })
    .otherwise({
      redirectTo: 'heroEntry'
    });

}]);