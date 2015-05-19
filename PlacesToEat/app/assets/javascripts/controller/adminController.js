/**
 * Created by Dino on 5/17/2015.
 */
var adminController = app.controller('adminController', function ($scope, $http, statsService) {
    window.MY_SCOPE = $scope;

    $scope.usersClick = function () {
        $scope.showUsers = true;
        $scope.showStats = false;
        getUsers();
    };

    $scope.statsClick = function () {
        $scope.showUsers = false;
        $scope.showStats = true;
        makeChart();
    };

    function getUsers() {
        $http.get('/api/users').
            success(function (data, status, headers, config) {
                $scope.users = data;
            }).
            error(function (data, status, headers, config) {
                // log error
            });
        $http.get('/api/role').
            success(function (data, status, headers, config) {
                $scope.roles = data;
            }).
            error(function (data, status, headers, config) {
                // log error
            });
    };

    function getUserSignupStats() {
        statsService.userSignUpStats().then(function (data) {
            $scope.chart_data = data

            $scope.options = {
                responsive: true,
                maintainAspectRatio: true,
                animation: true
            };
            setChartParams();
        });
    };

    function setChartParams() {
        $scope.labels = [];
        $scope.data = new Array(1);
        $scope.series = [];
        $scope.data[0] = [];
        for (var i = 0; i < $scope.chart_data.length; i++) {
            $scope.labels.push($scope.chart_data[i].created_at.toString());
            $scope.data[0].push($scope.chart_data[i].count);
        }

        if ($scope.selectedColourItem == 'blue' || $scope.selectedColourItem == null) {
            $scope.colours = [{
                "fillColor": "rgba(151,187,205,0.2)",
                "strokeColor": "rgba(151,187,205,1)",
                "pointColor": "rgba(151,187,205,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)"
            }];
        }
        else if ($scope.selectedColourItem == 'red') {
            $scope.colours = [{
                "fillColor": "rgba(237,45,80,0.2)",
                "strokeColor": "rgba(237,45,80,1)",
                "pointColor": "rgba(237,45,80,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)"
            }];
        }
        else if ($scope.selectedColourItem == 'grey') {
            $scope.colours = [{
                "fillColor": "rgba(72,74,80,0.2)",
                "strokeColor": "rgba(115,45,80,1)",
                "pointColor": "rgba(115,45,80,1))",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)"
            }];
        }
        else if ($scope.selectedColourItem == 'orange') {
            $scope.colours = [{
                "fillColor": "rgba(255,120,9,0.2)",
                "strokeColor": "rgba(255,120,9,1)",
                "pointColor": "rgba(255,120,9,1))",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)"
            }];
        }
        else if ($scope.selectedColourItem == 'purple') {
            $scope.colours = [{
                "fillColor": "rgba(142,2,171,0.1)",
                "strokeColor": "rgba(142,2,171,1)",
                "pointColor": "rgba(142,2,171,1))",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)"
            }];
        }
    };

    $scope.deleteUser = function (user) {
        $scope.user_json = {
            "user_id": user.id
        };
        $http({method: 'DELETE', url: '/api/users/' + user.id, data: angular.toJson($scope.user_json)});
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };

    $scope.saveUser = function (user) {
        $scope.user_json = {
            "user_id": user.id,
            "name": user.name,
            "lastname": user.lastname,
            "role_id": user.role_id,
            "active": user.active
        };
        $http({method: 'PATCH', url: '/api/users/' + user.id, data: angular.toJson($scope.user_json)});
    };

    $scope.selectChange = function () {
        // $scope.selectedItem
        makeChart();
    };

    $scope.selectColourChange = function () {
        setChartParams();
        // $scope.selectedItem
        /*   if ($scope.selectedColourItem == 'red') {
         $scope.options = {
         responsive: true,
         maintainAspectRatio: true,
         animation: true,
         scaleGridLineColor: 'rgba(237,45,80,0.2)',
         fillColor: 'rgba(115,45,80,0.2)'
         };
         $scope.colours = [{
         "fillColor": "rgba(237,45,80,0.2)",
         "strokeColor": "rgba(237,45,80,1)",
         "pointColor": "rgba(237,45,80,1)",
         "pointStrokeColor": "#fff",
         "pointHighlightFill": "#fff",
         "pointHighlightStroke": "rgba(151,187,205,1)"
         }];
         setChartParams();
         }
         if ($scope.selectedColourItem == 'blue') {
         $scope.options = {
         responsive: true,
         maintainAspectRatio: true,
         animation: true,
         scaleGridLineColor: 'rgba(75,45,172,0.2)',
         fillColor: 'rgba(115,45,80,0.2)'
         };
         $scope.colours = [{
         "fillColor": "rgba(237,45,80,0.2)",
         "strokeColor": "rgba(237,45,80,1)",
         "pointColor": "rgba(237,45,80,1)",
         "pointStrokeColor": "#fff",
         "pointHighlightFill": "#fff",
         "pointHighlightStroke": "rgba(151,187,205,1)"
         }];
         setChartParams();
         }
         if ($scope.selectedColourItem == 'grey') {
         $scope.options = {
         responsive: true,
         maintainAspectRatio: true,
         animation: true,
         scaleGridLineColor: 'rgba(72,74,80,0.2)',
         fillColor: 'rgba(115,45,80,0.2)'
         };
         setChartParams();
         }*/
    };

    function makeChart() {
        if ($scope.selectedItem == 'signups')
            getUserSignupStats();
        //var labels = [];


        /* angular.forEach($scope.chart_data, function(value) {
         $scope.labels.push(value.created_at)
         });*/

        // $scope.series = ['Series A'];

        //var data = [];

        /* angular.forEach($scope.chart_data, function(value) {
         $scope.data.push(value.count)
         });*/

        //$scope.labels = $scope.chart_data
        /* $scope.data = [
         [65, 59, 80, 81, 56, 55, 40],
         [28, 48, 40, 19, 86, 27, 90]
         ];*/
        /*  $scope.onClick = function (points, evt) {
         console.log(points, evt);
         };*/
    };

});

adminController.$inject = ['$scope', '$http', 'statsService'];