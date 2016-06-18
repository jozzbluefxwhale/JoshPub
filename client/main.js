import angular from 'angular';
import angularMeteor from 'angular-meteor';

var app = angular.module('joshpub',[
    angularMeteorr
]);


function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) == 0;
    };
}
