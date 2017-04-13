angular.module('RepurchaseDemo').controller('MenuController', ['$rootScope', '$scope', '$http', '$state', function ($rootScope, $scope, $http,$state) {
   
    $rootScope.menuitems = [
            { title: "Repurchase", active: true, menuid: 1, state: "RepurchaseHomeScreen" },
            { title: "Addition", active: false, menuid: 2, state: "addition" },
    ];
    $rootScope.menuid = 3;

    $scope.Navigate = function (item) {
            $state.go(item.state);            
        }
    
}]);
