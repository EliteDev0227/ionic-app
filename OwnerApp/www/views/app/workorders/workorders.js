app

    .controller('WorkorderCtrl', function($scope, $state,$http,$stateParams,$ionicModal,$localStorage) {
        $scope.units = {};
        $scope.$storage = $localStorage;
        $scope.units = $scope.$storage.units;

        $scope.current_unit = $scope.$storage.current_unit;


        $scope.unit = _.find($scope.units, {id: $scope.current_unit });


console.log($scope.unit);
console.log($scope.current_unit);
var UnitID=$scope.unit.UnitID;






            $scope.thumbnail = 'https://www.siebert-realty.com/units/phpthumb/img.php?src=/units/pics/'+UnitID+'.jpg&w=300&h=400&far=1';

            $http.get('https://api.siebert-realty.com/owner/woHistory.asp?un='+$scope.unit.UnitID)
                .success(function(response) {
                    $scope.workorders = response;
                });



        $scope.workorderDetails = function(id){

            $http.get('https://api.siebert-realty.com/vendors/woView.asp?oi='+id)
                .success(function(response) {
                    $scope.workorder = response;
                    $scope.workorder.woAssignedTo = response.woAssignedTo.replace('Siebert Maintenance','(SR)');
                    $scope.modal = $ionicModal.fromTemplateUrl('views/app/workorders/workorder-details.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function(modal) { $scope.modal = modal; $scope.modal.show();});

                });

        }


    })
