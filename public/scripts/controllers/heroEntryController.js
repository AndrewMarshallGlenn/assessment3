/**
 * Created by andrewglenn on 3/3/16.
 */
myApp.controller('HeroEntryController', ['$scope', 'HeroFactory', function($scope, HeroFactory) {

  var heroFactory = HeroFactory;

  $scope.alias = '';
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.city = '';
  $scope.primaryPower = '';
  $scope.powers = {};
  $scope.heroes = {};
  $scope.hero = {
    alias: $scope.alias,
    first_name: $scope.firstName,
    last_name: $scope.lastName,
    city: $scope.city,
    primary_power: $scope.primaryPower
  };

  heroFactory.getHeroes().then(function(){
    $scope.heroes = heroFactory.heroList();
  });

  heroFactory.getPowers().then(function(){
    $scope.powers = heroFactory.powerList();
  });

  $scope.submitHero = function(){
    heroFactory.postHero($scope.hero).then(function(){
      heroFactory.getHeroes().then(function(){
        $scope.tasks = heroFactory.heroList();
      });
    });
  };


}]);