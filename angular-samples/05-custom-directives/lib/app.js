var app = angular.module('superhero', []);

app.directive('supermanlogo', function () {
    return {
        restrict: 'E',
        template: '<img src="img/supermanlogo.svg" width="700">'
    }
});