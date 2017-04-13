angular.module('RepurchaseDemo').controller('PeopleSearchController', ['$rootScope', '$scope', 'ngDialog', '$http', function ($rootScope, $scope, ngDialog, $http) {
    
    $scope.selectedPerson = null;
    $rootScope.entityNo = $scope.SearchValue;
    $scope.ChangeEntity = function () {

        if (typeof $scope.SearchValue != "undefined" && $scope.SearchValue != null) {
            $scope.$emit("ShowLoadding", 1);
            $scope.$emit("ShowError", "");
            $scope.Entity = $scope.SearchValue;
            $rootScope.entityNo = $scope.SearchValue;
            //$(document).ready(function () {
            //    $rootScope.$emit("ShowError", "");
            //    $('.peoplelookup').enscroll({
            //        showOnHover: false,
            //        verticalTrackClass: 'track3',
            //        verticalHandleClass: 'handle3'
            //    });
            //});
            GetPeoples();
        }
        else {
            $scope.SearchValue = null;
            $scope.$emit("ShowLoadding", 0);
        }
    }

    $scope.$on("SearchByPeopleNumber", function (event, PeopleNumber) {
        GetPeoples();
        //broadcast to child controllers
        if (parseInt(PeopleNumber) === 0) {
            $scope.Entity = undefined;
        }
        else {
            $scope.Entity = PeopleNumber;
        }

    });

    function GetPeoples() {
        var inputArray = new Array();
        var inputObject = new Object();
        inputObject.Name = "Entity";
        inputObject.Value = $scope.Entity;
        inputArray.push(inputObject);
        var inputObject = new Object();
        inputObject.Name = "Role";
        inputObject.Value = 1;
        inputArray.push(inputObject);
        // $scope.loading = true;
        var x = GetSWAPDataQueryServiceHost() + "DataQueries/DealTransfer/GetPersonDetails/" + JSON.stringify(inputArray);
        $http.get(x)
        .success(function (response) {
                var PeopleDetails = new Array();
            var PeopleObject = new Object();
            if (response.GetDataQueryResult.ResultTables[0].ResultRows.length > 100) {
                alert("Too many records will be returned! Please provide more details.");  //SWAP-3013: Message needs to be confirmed.
                $scope.$emit("ShowLoadding", 0);
            }
            else {
                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    PeopleObject = new Object();
                    PeopleObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    PeopleObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    PeopleObject.selected = false;
                    PeopleDetails.push(PeopleObject);
                    $scope.loading = false;
                }


                $scope.Peoples = PeopleDetails;


                if (rows == 0) {
                    $scope.ShowPeopleError = true;

                    $scope.$emit("ShowLoadding", 0);
                    $scope.$emit("ShowError", "No Investor Details found for the entered People.");
                    ClearContracts();

                    if ($rootScope.menuid == 2) {
                        if (!(typeof $rootScope.DestinationBanks === "undefined"))
                            delete $rootScope.DestinationBanks;
                        if (!(typeof $rootScope.DestinationEntityKey === "undefined"))
                            delete $rootScope.DestinationEntityKey;
                        if (!(typeof $rootScope.DestinationEntityValue === "undefined"))
                            delete $rootScope.DestinationEntityValue;
                    }

                }
                else {
                    $scope.ShowPeopleError = false;
                    if (rows > 1) {
                        var dialog = ngDialog.open({
                            template: '<div ng-lookup> </div>',
                            plain: true,
                            scope: $scope,
                            id: 'peopleid',
                        });
                        dialog.closePromise.then(function (data) {
                            $scope.$emit("ShowLoadding", 0);
                            if (data.value != null && data.value != "$closeButton") {
                                $rootScope.$emit("SetSourceEntity", data.value.People_Number, data.value.Name);
                                $scope.SearchValue = data.value.People_Number + ' ' + data.value.Name;
                                if ($rootScope.menuid == 1) {
                                    if (!(typeof $rootScope.SelectedContract === "undefined"))
                                        delete $rootScope.SelectedContract;
                                    showContracts(data.value.People_Number);
                                }
                                else if ($rootScope.menuid == 2) {
                                    if (!CheckPeopleAlreadyExist($rootScope.DestinationEntityKey)) {
                                        $scope.$parent.checkDefaulComplaince($rootScope.DestinationEntityKey);
                                        GetBankDetails($rootScope.DestinationEntityKey);


                                    }
                                    else {
                                        delete $rootScope.DestinationEntityKey;
                                        delete $rootScope.DestinationEntityValue;
                                        $scope.SearchValue = "";
                                        $rootScope.$emit("ShowErrorMessage", "This Entity has already been selected");
                                    }
                                }

                            }

                        });
                    }
                    else {
                        $rootScope.$emit("SetSourceEntity", PeopleDetails[0].People_Number, PeopleDetails[0].Name);
                        $scope.SearchValue = PeopleDetails[0].People_Number + ' ' + PeopleDetails[0].Name;
                        $rootScope.entityNo = PeopleDetails[0].People_Number;

                        
                    }


                        



                  
                }
            }
        })
        .error(function (data, status, headers, config) {

            alert("Error : " + data + " " + status);
            $scope.$emit("ShowLoadding", 0);

        });

    }

   

    
}]);