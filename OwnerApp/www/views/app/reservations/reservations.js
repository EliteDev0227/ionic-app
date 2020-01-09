app

    .controller('ReservationsCtrl', function($scope, $state,$http,$ionicLoading,$ionicModal,$stateParams,ionicDatePicker,$localStorage) {

    $scope.reservations = {};
        $scope.units = {};
        $scope.$storage = $localStorage;
        $scope.units = $scope.$storage.units;

        $scope.current_unit = $scope.$storage.current_unit;


        $scope.unit = _.find($scope.units, {id: $scope.current_unit });

        var id = $scope.unit.id;


        $scope.thumbnail = 'https://www.siebert-realty.com/units/phpthumb/img.php?src=/units/pics/'+$scope.unit.UnitID+'.jpg&w=300&h=400&far=1';


    $scope.doRefresh = function($UnitID) {

        $ionicLoading.show({
            template: 'Loading reservations...'
        });

        $http.get('https://api.siebert-realty.com/owner/reservations.asp?uid2='+$UnitID+'&firstLoad=yes')
            .then(function(response) {
                $scope.reservations = response.data;
                $scope.meta = $scope.reservations.pop();
                // process user data and prepare whole places
                angular.forEach($scope.reservations, function(reservation, key) {
                    if($scope.places.indexOf(reservation.Code) == -1) {
                        $scope.places.push(reservation.Code);
                    }
                });


                $ionicLoading.hide();
                $scope.$broadcast('scroll.refreshComplete');

            }, function (reason) {
                console.log(reason);
                $ionicLoading.hide();
                $scope.$broadcast('scroll.refreshComplete');
            });


    };



        $scope.doRefresh(id);

    $scope.reservation =[];
    $scope.reservationSearch = function(){


        $scope.modal = $ionicModal.fromTemplateUrl('views/app/unit/add-reservation.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.reservationSearchModal = modal;
            $scope.reservationSearchModal.show();
        });

    };

    $scope.reservationDetails = function(confno){

        var i = $scope.reservations.length,
            ownerData;

        while(i--) {
            // console.log($scope.reservations[i].confno);
            if(confno == $scope.reservations[i].confno) {
                $scope.reservation =  $scope.reservations[i];
                break;
            }
        }
        console.log(ownerData);

        $scope.modal = $ionicModal.fromTemplateUrl('views/app/reservations/reservation-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) { $scope.modal = modal; $scope.modal.show();});

    }

    $scope.close = function(){
        $scope.modal.close();
    }
    var setStartDate = {
        callback: function (val) {  //Mandatory
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            $scope.startDate = moment(val).format('ll');

        },

        to: new Date(2019, 12, 31), //Optional
        inputDate: new Date(),      //Optional
        mondayFirst: false,          //Optional
        closeOnSelect: true,       //Optional
        templateType: 'modal'       //Optional
    };
    var setEndDate = {
        callback: function (val) {  //Mandatory
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            $scope.endDate = moment(val).format('ll');

        },

        to: new Date(2019, 12, 31), //Optional
        inputDate: new Date(),      //Optional
        mondayFirst: false,          //Optional
        closeOnSelect: true,       //Optional
        templateType: 'modal'       //Optional
    };

    $scope.setStartDate = function(){
        ionicDatePicker.openDatePicker(setStartDate);
    };

    $scope.setEndDate = function(){
        ionicDatePicker.openDatePicker(setEndDate);
    };

})