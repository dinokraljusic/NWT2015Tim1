/**
 * Created by Dino on 5/17/2015.
 */
var adminController = app.controller('adminController', function($scope, $http, statsService) {
    window.MY_SCOPE=$scope;

    $scope.usersClick = function () {
        $scope.showUsers=true;
        $scope.showStats=false;
        getUsers();
    };

    $scope.statsClick = function () {
        $scope.showUsers=false;
        $scope.showStats=true;
        makeChart();
    };

    function getUsers()
    {
        $http.get('/api/users').
            success(function(data, status, headers, config) {
                $scope.users = data;
            }).
            error(function(data, status, headers, config) {
                // log error
            });
    };

    function getUserSignupStats()
    {
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

    function setChartParams(){
        $scope.labels = [];
        $scope.data = new Array(1);
        $scope.data[0]=[];
        for (var i=0; i<$scope.chart_data.length; i++){
            $scope.labels.push($scope.chart_data[i].created_at.toString());
            $scope.data[0].push($scope.chart_data[i].count);
        }
    };

    $scope.deleteUser=function(user)
    {
        $scope.user_json = {
            "user_id":user.id,
        };
        $http({ method: 'DELETE', url: '/api/users/' + user.id, data: angular.toJson($scope.user_json)});
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };

    $scope.selectChange = function()
    {
      // $scope.selectedItem
        makeChart();
    };

    function makeChart()
    {
        if($scope.selectedItem=='signups')
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