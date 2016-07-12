/*angular.module('suggestApp').controller('suggestCtrl', function($scope){
    $scope.types = ["Cerveza",
                    "Vino",
                    "Whiskey",
                    "Tequila",
                    "Vodka",
                    "Whiskey",
                    "Ron"];

    $scope.waro={
        name        :'',
        type        :'',
        price       :0,
        description :'',
        prove       :0,
        cantav      :0,
        image      :0
    };

    $scope.insert = function(){
        alert('success' + $scope.waro.name +'' + scope.waro.type +''
            + $scope.waro.price +''+$scope.waro.prove+''+$$scope.waro.cantav);
        }
});*/
////
////suggest.directive('disableBtn',
////    function() {
////        return {
////            restrict : 'A',
////            link : function(scope, element, attrs) {
////                var $el = $(element);
////                var submitBtn = $el.find('button[type="submit"]');
////                var fName = attrs.name;
////
////                scope.$watch(fName + '.$valid', function(val) {
////                    if (val) {
////                        submitBtn.removeAttr('disabled');
////                    } else {
////                        submitBtn.attr('disabled', 'disabled');
////                    }
////                });
////            }
////        };
////    }
//);