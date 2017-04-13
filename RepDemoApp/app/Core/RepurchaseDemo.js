
var RepurchaseDemo = angular.module('RepurchaseDemo', ['ui.router', 'ui.bootstrap', 'ngDialog', "ngAnimate", 'ngSanitize', 'ui.select']);

RepurchaseDemo.controller('AppController', ['$rootScope', '$scope', 'ngDialog', '$http', '$window', '$state',
    function ($rootScope, $scope, ngDialog, $http, $window, $state) {

      

    }]);


RepurchaseDemo.run(['$rootScope', '$state', function ($rootScope, $state) {

    //1.Implement functionality to check access levels and set active state of menu items

    //2.Based on access level go to appropriate tab
    $state.go('RepurchaseHomeScreen');
}]);

RepurchaseDemo.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider

        .state('RepurchaseHomeScreen', {
            template: "<ng-repurchase-demo></ng-repurchase-demo>"
        })
        .state('addition', {
            template: "<ng-additions></ng-additions>"

        })
}]);

RepurchaseDemo.directive("minimumSearchValid", function () {
    //Abhishek : Minimum Search Validation For Search
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, ele, attrs, ctrl) {
            var minLength = 3;
            scope.isMinSearchValid = false;
            // add a parser that will process each time the value is
            // parsed into the model when the user updates it.
            ctrl.$parsers.unshift(function (value) {
                if (value) {

                    var isnum = /^\d+$/.test(value);
                    if (isnum) {
                        scope.isMinSearchValid = true;
                        ctrl.$setValidity('minimumSearchValid', true);
                    }
                    else {
                        if (value.length >= minLength) {
                            scope.isMinSearchValid = true;
                            ctrl.$setValidity('minimumSearchValid', true);

                        }
                        else {
                            scope.isMinSearchValid = false;
                            ctrl.$setValidity('minimumSearchValid', false);
                        }


                    }
                }
                else
                    scope.isMinSearchValid = false;

                // if it's valid, return the value to the model,
                // otherwise return undefined.
                return scope.isMinSearchValid ? value : undefined;
            });

        }
    }
});

