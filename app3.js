(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chokolate"
  , "Pepto Bismol", "Peto Bismol (Chokolate flavor)"
  , "Pepto Bismol (Cookie flavor)"
];

angular.module('ShoppingListApp' , [])
.controller('ShoppingListController' , ShoppingListController);

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope) {

 $scope.shoppingList = shoppingList;

}


})();
