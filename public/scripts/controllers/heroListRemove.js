/**
 * Created by andrewglenn on 3/3/16.
 */
myApp.controller('HeroListRemoveController', ['$scope', 'HeroFactory', function($scope, HeroFactory) {

  var heroFactory = HeroFactory;

  $scope.alias = '';
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.city = '';
  $scope.primaryPower = '';
  $scope.powers = {};
  $scope.heroes = {};
  $scope.selectedHeroes = {};
  $scope.hero = {
    alias: $scope.alias,
    first_name: $scope.firstName,
    last_name: $scope.lastName,
    city: $scope.city,
    primary_power: $scope.primaryPower
  };
  $scope.selectAll = false;
    $scope.selectAll = false;

      heroFactory.getHeroes().then(function(){
    $scope.heroes = heroFactory.heroList();
  });

  heroFactory.getPowers().then(function(){
    $scope.powers = heroFactory.powerList();
  });

  $scope.removeHero = function(id){
    heroFactory.deleteHero(id).then(function(){
      heroFactory.getHeroes().then(function(){
        $scope.tasks = heroFactory.heroList();
      });
    });
  };
  heroFactory.getSomeHeroes($scope.primaryPower).then(function(){
    $scope.selectedHeroes = heroFactory.heroList();
  });
}]);