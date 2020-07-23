(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chokolate"
  , "Pepto Bismol", "Peto Bismol (Chokolate flavor)"
  , "Pepto Bismol (Cookie flavor)"
];

angular.module('ShoppingListApp' , [])
.controller('ShoppingListController' , ShoppingListController);
// .filter('replacee', InputFilter );

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope) {

  $scope.shoppingList = shoppingList;

  $scope.search = "";
  // $scope.search = "This my filter function !";

  // $scope.sayMessageFilter = function () {
  //   var output = replaceeFilter($scope.search, "This" , "Those");
  //   return output;
  // }



}

// function InputFilter() {
//   return function (input, target, replace) {
//     input = input || "" ;
//     input = input.replace(target , replace );
//     return input;
//   };
//
// }


})();
