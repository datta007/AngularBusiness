
angular.module('RepurchaseDemo').directive('ngHeader', function () {
    return {
        replace: false,
        restrict: 'E',
        templateUrl: "app/modules/Header/Header.html"

    }
});