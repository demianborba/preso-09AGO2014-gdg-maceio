var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'Demian Borba',
    'title' : 'Design Thinker',
    'company' : 'Action Innovation Center'
  }
});

