app.controller('translateController', ['$translate', '$scope', function ($translate, $scope) {

    $scope.toggleLanguage = function () {
        $translate.use(($translate.use() === 'en_EN') ? 'bs_BA' : 'en_EN');
        $scope.url= (($translate.use() === 'en_EN') ? "assets/iconba.png" : "assets/iconuk.png");
    };
}])

.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;

        attrs.$observe("backImg",function(n,o){
            if(!n)
                n="assets/iconuk.png"
            element.css({
                'background-image': 'url(' + n + ')',
                'background-size' : '20px 20px',
                'margin-top' : '15px',
                'margin-left': '15px'
            });
        });
    };
    });