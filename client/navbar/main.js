import angularMeteor from 'angular-meteor';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './main.html'

// aqui se establecen las dependencias de JoshPubbApp.
angular.module('joshpubApp',['angularMeteor', 'ui-router']);
// creamos el router
angular.module('joshpubApp').config('$urlRouterProvider', '$stateProvider','$locationProvider',
  function($urlRouterProvider,$stateProvider,$locationProvider){
      $locationProvider.html5Mode(true); // formato del url que se muestra en la barra del navegador.

      $stateProvider
      .state('index',{
          url:'/',
          templateUrl: './index.html',
          controller: 'mainCtrl'
      })
          .state('busquedaA',{
              url:'/busqueda',
              templateUrl: './seach.html',
              controller: 'advanceSearchCtrl'
          })
          .state('rack',{
              url:'/',
              templateUrl: './rack.html',
              controller: 'rackCtrl'
          })



  });



app.config(function($stateProvider){
   $stateProvider
    .when("/",{
        templateUrl: "./main.html"
    })
    .when("/busqueda",{
        templateUrl: "./search.html"
    })
    .when("/rack", {
        templateUrl: "./rack.html"
    });
});

app.controller('navbarCtrl',navbarCtrl);
function navbarCtrl($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) == 0;
    }}
