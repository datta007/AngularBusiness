angular.module('RepurchaseDemo').controller('WebReferenceController', ['$rootScope', '$scope', 'ngDialog', '$http', function ($rootScope, $scope, ngDialog, $http) {

    $scope.webref = null;
    $scope.ChangeEntity = function () {

        $rootScope.Webref = $scope.webref;
        $rootScope.ReceiveDate = $scope.receivedate;
        $rootScope.ReceiveTime = $scope.Received_Time;
    }
    
    }]);