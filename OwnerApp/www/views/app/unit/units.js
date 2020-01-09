app

    .controller('UnitCtrl', function($scope,$httpParamSerializer, Utils,$state,$http,$ionicLoading,$ionicModal,$stateParams,ionicDatePicker,$localStorage,$ionicSlideBoxDelegate,$timeout) {
        $scope.units = {};
        $scope.range = new Array(50);
        $scope.$on('$ionicView.enter', function(){

            var page_id = $state.current.name;



            // Anything you can think of
            $scope.units = $scope.$storage.units;

            $scope.current_unit = $scope.$storage.current_unit;
            $scope.unit = _.find($scope.units, {id: $scope.current_unit });
            if( $scope.current_unit == $scope.$storage.current_unit )
                $scope.loadPropertyData();

            if(page_id == 'units.statements'){
                $scope.loadStatements();
            }
            // $scope.loadStatements();
        });
        $scope.places = [];

        $scope.$storage = $localStorage;
        $scope.wor = [];



    $scope.reservations = {};
    $scope.surveys = {};
    // selected places
    $scope.selected = [];
    // whole places
        $scope.statements = [];



    $scope.loadSurveys =function(){
            $http.get('https://api.siebert-realty.com/owner/surveys.asp',{
                params: { 'userid': $scope.$storage.user_id, 'id' : $scope.unit.id,'syear':2018 }
            }).success(function(response) {

                $ionicLoading.show({
                    template: 'Loading...'
                });

                $scope.surveys = response;
                $scope.survey_details = response.details;


            }).then(function (result) {
                console.log(result);
                $scope.modal = $ionicModal.fromTemplateUrl('views/app/unit/surveys.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal) {
                    $scope.surveysModal = modal;
                    $scope.surveysModal.show();
                });
                $ionicLoading.hide();
                $scope.$broadcast('scroll.refreshComplete');
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
            }, function (reason) {
                $ionicLoading.hide();
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
    $scope.loadPropertyData  = function(){

        $scope.gallery = [];


        $http.get('https://api2.siebert-realty.com/units/'+$scope.unit.UnitID,{ params: {  }}).success(function(response) {

            $ionicLoading.show({
                template: 'Loading...'
            });

            $scope.photos = response.photos;

            var i = 1;
            // while(i < response.photos.unit_images){
            while(i < 3){


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
    $scope.loadStatements  = function(){

        $ionicLoading.show({
            template: 'Loading...'
        });

        $http.get('https://api.siebert-realty.com/owner/statements.asp',{ params: {'unit_id' : $scope.unit.UnitID, 'owner_id' : $scope.$storage.user_id  }}).success(function(response) {



            $scope.statements = response;







        }).then(function (result) {

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');

        }, function (reason) {
            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        });

    };

    $scope.changeUnit  = function(){

    };

    $scope.sendWorkOrderRequest = function () {

            var data = $httpParamSerializer({


                details: $scope.$storage.profile.sFirst_nm + ' '+ $scope.$storage.profile.sLast_nm + "(OWNER)" + $scope.wor.title + ' ' + $scope.wor.description,
                floor: '0',
                location: $scope.wor.location,
                id: $scope.unit.id,

                action:'reportIssue',
                cleanerid: $scope.$storage.user_id,
                unitid:  $scope.unit.UnitID,

            });



            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('https://api.siebert-realty.com/cleaner/index.asp', data, config)
                .success(function (data, status, headers, config) {
                    $scope.PostDataResponse = data;
                    console.log($scope.PostDataResponse);
                    $scope.wor = [];
                    $timeout(function() {
                        Utils.alertshow('HQ Notified','Request has been submitted');
                    }, 500);


                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
                });
        };












})