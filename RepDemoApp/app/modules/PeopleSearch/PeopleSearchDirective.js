
angular.module('RepurchaseDemo').directive('ngPeople', function () {
    return {
        replace: false,
        restrict: 'E',
        templateUrl: "app/modules/PeopleSearch/PeopleSearch.html"

    }
});