(function () {
angular.module('myApp')
	.controller('myList', ['$scope', '$filter', function($scope, $filter){
		//Set defaults
		$scope.sortBy = 'name';
		$scope.reverse = false;

		$scope.orders =[
			{
				name: 'Jack',
				age: '23',
				joined: '2000-12-02',
				city: 'New York',
				orderTotal: 3.54
			},
			{
				name: 'Malcom',
				age: '24',
				joined: '2013-06-22',
				city: 'San Francisco',
				orderTotal: 8.6789
			},
			{
				name: 'Peter',
				age: '22',
				joined: '2011-08-15',
				city: 'San Diego',
				orderTotal: 7.2334
			},
			{
				name: 'Lori',
				age: '32',
				joined: '2010-03-17',
				city: 'Chicago',
				orderTotal: 13.9997
			}
		];
		$scope.add = function(){
			$scope.orders.push({
				name: $scope.new_name,
				age: $scope.new_age,
				joined: $filter('date')($scope.new_joined, 'MM/dd/yyyy'),
				city: $scope.new_city,
				orderTotal: $scope.new_orderTotal
			});
			$scope.new_name = '';
			$scope.new_age = '';
			$scope.new_joined = '';
			$scope.new_city = '';
			$scope.new_orderTotal = '';
		}
		$scope.remove = function(index){
			$scope.orders.splice(index, 1)
		}
		$scope.doFilter = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}])
}());