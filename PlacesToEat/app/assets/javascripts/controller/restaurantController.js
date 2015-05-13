var restaurantController = app.controller('restaurantController', function($scope, $http, $rootScope, restaurantService, $filter) {
    $scope.isCollapsed = true;
    window.MY_SCOPE=$scope;
    //$scope.pretraga="Res"

    $scope.init = function(id)
    {
        $scope.user_id = id;
        $http.get('/api/users/'+ $scope.user_id +'/rating').
            success(function(data, status, headers, config) {
                $scope.ratings = data;
            }).
            error(function(data, status, headers, config) {
                // log error
            });
    };

    restaurantService.then(function (data) {
        $scope.restaurants = data
    });

    $scope.filterByName = function(restaurant) {
        if(typeof pretraga !== 'undefined') return restaurant.name.indexOf(pretraga)!=-1;
        return true;
    };
    $scope.change = function() {
        pretraga= document.getElementById("pretragafield").value;
        //return restaurant.name == $scope.pretraga;
    };

    $scope.openInfoWindow = function(e,restaurant){
        e.preventDefault();
        var selectedMarker = $filter('filter')($rootScope.markers, {title: restaurant.name})[0];
        google.maps.event.trigger(selectedMarker, 'click');
    }

    /*    $http.get('/api/restaurant').
     success(function(data, status, headers, config) {
     $rootScope.restaurants = data;
     }).
     error(function(data, status, headers, config) {
     // log error
     });*/
});

restaurantController.$inject = ['$scope', '$http', 'restaurantService'];