app.controller('translateController', ['$translate', '$scope', function ($translate, $scope) {

    $scope.toggleLanguage = function () {
        $translate.use(($translate.use() === 'en_EN') ? 'bs_BA' : 'en_EN');
        $scope.url= (($translate.use() === 'en_EN') ? "assets/iconba.ico" : "assets/iconuk.ico");
    };
}])

.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;

        attrs.$observe("backImg",function(n,o){
            if(!n)
                n="assets/iconuk.ico"
            element.css({
                'background-image': 'url(' + n + ')',
                'background-size' : 'cover'
            });
        });
    };
    });