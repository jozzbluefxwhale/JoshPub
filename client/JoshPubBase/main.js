import angular from 'angular'
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


// aqui se establecen las dependencias de JoshPubbApp.
var app =angular.module('joshpubApp',['angular-meteor', 'ui.router','angular-templates']);

//

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
              templateUrl: "client/JoshPubRack/rack.html",
              data : { pageTitle: '' }
              //controller: 'rackCtrl'
          })
          .state('JoshPubSuggest',{
              name:'Sugiere :: JoshPub',
              url:'/suggest',
              templateUrl: "client/JoshPubSuggest/suggest.html",
              data : { pageTitle: 'Suggest :: JoshPub' }
              //controller: 'suggestCtrl'
         })
          .state('contact',{
              url:'/contact',
              templateUrl: "client/JoshPubContact/contact.html",
              data : { pageTitle: 'Contacto :: JoshPub' }
              //controller: 'contactCtrl'
          })
          .state('faq',{
              url:'/FAQ',
              templateUrl: "client/JoshPubPlus/faq.html",
              data : { pageTitle: 'Faq :: JoshPub' }
          })
          .state('about',{
              url:'/about',
              templateUrl: "client/JoshPubPlus/about.html",
              data : { pageTitle: 'Acerca De :: JoshPub' }
          })
          .state('credits',{
              url:'/credits',
              templateUrl: "client/JoshPubPlus/credits.html",
              data : { pageTitle: 'Credits :: JoshPub' }
          });

  }]);


app.controller('navbarCtrl',
function navbarCtrl($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) == 0;
        }}
);

app.controller('mainCtrl', function($scope) {
    $scope.user= {
        nombre: '',
        email: '',
        coment: ''
    };

    $scope.registered = false;


    $scope.send = function(){
        $scope.registered = false;
        // Si no es valido no procede.
        if($scope.frmRegister.$invalid)
            return false;

        $scope.registered = true;
    }
});