
angular.module('RepurchaseDemo').directive('ngLookup', function () {
    return {
        replace: false,
        restrict: 'A',
        templateUrl: "app/modules/PeopleSearch/PeopleLookup.html"

    }
});