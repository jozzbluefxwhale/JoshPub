import angular from 'angular'
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


// aqui se establecen las dependencias de JoshPubbApp.
var app =angular.module('joshpubApp',['angular-meteor', 'ui.router','angular-templates']);

// creamos el router

app.config(['$stateProvider','$locationProvider','$urlRouterProvider',
   function($stateProvider,$locationProvider,$urlRouterProvider){
      $locationProvider.html5Mode(true); // formato del url que se muestra en la barra del navegador.

      $stateProvider
      .state('index',{
          url:'/index',
          templateUrl: "client/JoshPubIndex/index.html"
          //controller: 'mainCtrl'
      })
          .state('busqueda',{
              url:'/busqueda',
              templateUrl: "client/JoshPubSearch/search.html"
              // controller: 'advanceSearchCtrl'
          })
          .state('rack',{
              url:'/rack',
              templateUrl: "client/JoshPubRack/rack.html"
              //controller: 'rackCtrl'
          })
          .state('JoshPubSuggest',{
              url:'/suggest',
              templateUrl: "client/JoshPubSuggest/suggest.html"
              //controller: 'suggestCtrl'
         })
          .state('contact',{
              url:'/contact',
              templateUrl: "client/JoshPubPlus/contact.html",
              //controller: 'contactCtrl'
          })
          .state('faq',{
              url:'/FAQ',
              templateUrl: "client/JoshPubPlus/faq.html"
          })
          .state('aboutUs',{
              url:'/aboutUs',
              templateUrl: "client/JoshPubPlus/about.html"
          })
          .state('terms',{
              url:'/terms',
              templateUrl: "client/JoshPubPlus/terms.html"
          });
     $urlRouterProvider.otherwise("./gate.html")

  }]);


app.controller('navbarCtrl',
function navbarCtrl($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) == 0;
        }}
);