app.controller('DashboardCtrl', function($scope, $state,$http,$ionicLoading,$ionicModal,$stateParams,ionicDatePicker,$localStorage) {

        $scope.units = {};
        $scope.reservations = {};


        $scope.$storage = $localStorage;




        $scope.units = $scope.$storage.units;







    });