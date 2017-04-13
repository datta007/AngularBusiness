
angular.module('RepurchaseDemo').directive('ngAdditions', function () {
    return {
        replace: false,
        restrict: 'E',
        templateUrl: "app/modules/Additions/Additions.html"

    }
});
