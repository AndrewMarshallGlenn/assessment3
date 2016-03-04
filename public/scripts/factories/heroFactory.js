/**
 * Created by andrewglenn on 3/3/16.
 */
myApp.factory('HeroFactory', ['$http', function($http) {

  var heroes = undefined;
  var powers = undefined;

  var facGetHeroes = function() {
    var promise = $http.get('/heroRoutes').then(function(response) {
      heroes = response.data;
      console.log(heroes);
    });
    return promise;
  };
  var facGetSomeHeroes = function(power) {
    var promise = $http.get('/heroRoutes/some', power).then(function(response) {
      heroes = response.data;
      console.log(heroes);
    });
    return promise;
  };
  var facGetPowers = function() {
    var promise = $http.get('/powerRoutes').then(function(response) {
      powers = response.data;
      console.log(powers);
    });
    return promise;
  };

  var facPostHero = function(hero) {
    var promise = $http.post('/heroRoutes', {hero: hero}).then(function(response) {
      return facGetHeroes();
    });
    return promise;
  };

  var facDeleteHero = function(index) {
    var promise = $http.delete('/heroRoutes/' + index).then(function(response) {
    });
    return promise;
  };


  var FactoryOutput = {
    postHero: function(hero) {
      return facPostHero(hero);
    },
    getHeroes: function() {
      return facGetHeroes();
    },
    getSomeHeroes: function(power) {
      return facGetSomeHeroes(power);
    },
    deleteHero: function(index) {
      return facDeleteHero(index);
    },
    getPowers: function() {
      return facGetPowers();
    },
    heroList: function() {
      return heroes;
    }
    powerList: function() {
      return powers;
    }
  };

  return FactoryOutput;
}]);