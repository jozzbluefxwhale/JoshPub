import angular from 'angular'
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


// aqui se establecen las dependencias de JoshPubbApp.
angular.module('joshpubApp', [
        'angular-meteor',
        'ui.router',
        'angular-templates'
]);


angular.module('joshpubApp',['angular-meteor', 'ui.router','angular-templates']).config(['$stateProvider','$locationProvider','$urlRouterProvider',
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
              data : { pageTitle: 'Suggest :: JoshPub' },
              controller: 'suggestCtrl'
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

