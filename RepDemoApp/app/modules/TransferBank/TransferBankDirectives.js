
angular.module('RepurchaseDemo').directive('ngTransferBank', function () {
    return {
        replace: false,
        restrict: 'E',
        templateUrl: "app/modules/TransferBank/TransferBank.html"

    }
});