angular.module('RepurchaseDemo').directive('ngMenu', function () {
   
    return {
        replace: false,
        restrict: 'E',
        templateUrl: "app/modules/Menu/Menu.html"

    }
});

