app.controller('restaurantController', ['$scope','$http', function($scope, $http) {
    $scope.isCollapsed = true;
        $http.get('/api/restaurant').
            success(function(data, status, headers, config) {
                $scope.restaurants = data;

            }).
            error(function(data, status, headers, config) {
                // log error
            });
}]);