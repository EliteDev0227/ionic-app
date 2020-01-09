app

    .controller('SurveyCtrl', function($scope, $state,$http,$ionicLoading,$ionicModal,$stateParams,ionicDatePicker,$localStorage,$ionicSlideBoxDelegate) {
        $scope.units = {};
        $scope.range = new Array(50);
        $scope.$on('$ionicView.enter', function(){
            // Anything you can think of
            $scope.units = $scope.$storage.units;

            $scope.current_unit = $scope.$storage.current_unit;
            $scope.unit = _.find($scope.units, {id: $scope.current_unit });
            if( $scope.current_unit == $scope.$storage.current_unit )
                $scope.loadPropertyData();
        });
        $scope.places = [];

        $scope.$storage = $localStorage;

    $scope.reservations = {};
    // selected places
    $scope.selected = [];
    // whole places
        $scope.gallery = [];
    $scope.loadPropertyData  = function(){

        $scope.gallery = [];


        $http.get('https://api2.siebert-realty.com/units/'+$scope.unit.UnitID,{ params: {  }}).success(function(response) {

            $ionicLoading.show({
                template: 'Loading...'
            });

            $scope.photos = response.photos;

            var i = 1;
            while(i < response.photos.unit_images){


                var num = i < 10 ? '0'+i : i;
                $scope.gallery.push(response.photos.photoBase+num+'.jpg');
                i++;

            }







        }).then(function (result) {

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
            $ionicSlideBoxDelegate.slide(0);
            $ionicSlideBoxDelegate.update();
        }, function (reason) {
            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        });

    };

    $scope.changeUnit  = function(){

    };













})