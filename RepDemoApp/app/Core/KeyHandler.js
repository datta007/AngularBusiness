angular.module('RepurchaseDemo').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter, { 'event': event });
                });

                event.preventDefault();
            }
        });
    };
});

function highlight(element) {

    var previousSelection = document.getElementsByClassName("row-selected");
    for (var i = 0; i < previousSelection.length; i++) {
        previousSelection[i].className = "";
    }

    var targetElement = document.getElementById(element.id);
    targetElement.className = "row-selected";
}
