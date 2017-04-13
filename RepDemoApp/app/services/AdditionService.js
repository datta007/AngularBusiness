

angular.module('RepurchaseDemo').service('AdditionService', function ($http) {
    // alert("hi");

    this.GetProducts = function GetProducts() {

        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/ProductLookUp/";


        var ArrAvailableOptions = new Array();
        $.ajax({
            type: 'GET',
            headers: {
            },
            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (data) {
                //$scope.products = [];
                //$scope.FillCurrency = function () {
                //    FillCurrencyDropDown($scope.selectedProduct);
                //}
                $.each(data, function () {
                    $.each(this, function (index, row) {

                        var obj = row[0].ResultRows;
                        for (var i = 0; i < obj.length; i++) {
                            var prodObject = new Object();
                            prodObject.id = obj[i].Columns[0];
                            prodObject.name = obj[i].Columns[1];
                            ArrAvailableOptions.push(prodObject);
                        }
                    });
                });
                // $scope.products = ArrAvailableOptions;
                //for (var i = 0; i < ArrAvailableOptions.length; i++) {
                //    console.log(ArrAvailableOptions[i].name);
                //}


            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        }); return ArrAvailableOptions;

    };

    this.GetBankNames = function GetBankNames() {


        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/BankNamesLookUp/";

        var BankDetails = new Array();
        // var ArrBankNames = new Array();
        $.ajax({
            type: 'GET',
            headers: {
            },
            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // $scope.banks = [];

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    BankObject = new Object();
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    BankObject.selected = false;
                    BankDetails.push(BankObject);
                }


                // for (var i = 0; i < BankDetails.length; i++) {
                //     console.log(BankDetails[i].Name);
                //}


            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return BankDetails;


    };

    this.GetFundTypes = function GetFundTypes() {


        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/BankNamesLookUp/";

        var BankDetails = new Array();
        // var ArrBankNames = new Array();
        $.ajax({
            type: 'GET',
            headers: {
            },
            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // $scope.banks = [];

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    BankObject = new Object();
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    BankObject.selected = false;
                    BankDetails.push(BankObject);
                }

                // $scope.bank = BankDetails;
                //for (var i = 0; i < ArrAvailableOptions.length; i++) {
                //    console.log(ArrAvailableOptions[i].name);
                //}


            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return BankDetails;


    };
    this.getBrokerNames = function getBrokerNames() {


        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/BrokerLookUp/";

        var BrokerDetails = new Array();
        // var ArrBankNames = new Array();
        $.ajax({
            type: 'GET',
            headers: {
            },
            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // $scope.banks = [];

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    BrokerObject = new Object();
                    BrokerObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    BrokerObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    BrokerObject.selected = false;
                    BrokerDetails.push(BrokerObject);
                }


                //for (var i = 0; i < BrokerDetails.length; i++) {
                //    console.log(BrokerDetails[i].Name);
                //}


            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return BrokerDetails;


    };

    this.GetPhaseIn = function GetPhaseIn() {


        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/BankNamesLookUp/";

        var BankDetails = new Array();
        // var ArrBankNames = new Array();
        $.ajax({
            type: 'GET',
            headers: {
            },
            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // $scope.banks = [];

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    BankObject = new Object();
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    BankObject.selected = false;
                    BankDetails.push(BankObject);
                }

                // $scope.bank = BankDetails;
                //for (var i = 0; i < ArrAvailableOptions.length; i++) {
                //    console.log(ArrAvailableOptions[i].name);
                //}


            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return BankDetails;


    };

    this.GetAccountType = function GetAccountType() {


        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/BankNamesLookUp/";

        var BankDetails = new Array();
        // var ArrBankNames = new Array();
        $.ajax({
            type: 'GET',
            headers: {
            },
            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // $scope.banks = [];

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    BankObject = new Object();
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    BankObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    BankObject.selected = false;
                    BankDetails.push(BankObject);
                }

                // $scope.bank = BankDetails;
                //for (var i = 0; i < ArrAvailableOptions.length; i++) {
                //    console.log(ArrAvailableOptions[i].name);
                //}


            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return BankDetails;


    };

    this.GetsharePortfolioMandates = function GetsharePortfolioMandates() {
        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/GetSharePortfolioMandate/";
        //var ProductDetails = new Array();
        var SPMandateDetails = new Array();
        ///  alert(serviceURL);
        $.ajax({
            type: 'GET',
            headers: {
            },

            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // alert("in response");



                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    SPMandateObject = new Object();
                    SPMandateObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    SPMandateObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    SPMandateObject.selected = false;
                    SPMandateDetails.push(SPMandateObject);
                }

                //for (var i = 0; i < SPMandateDetails.length; i++) {
                //    console.log(SPMandateDetails[i].Mandate_Description);
                //}
                //$scope.MandateTypes = SPMandateDetails;

                // alert("scope - " + $scope.Branches);

            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return SPMandateDetails;
    };

    this.GetEntityExistingBankDetails = function GetEntityExistingBankDetails(peopleNumber) {


        //  $scope.BankDetails.Branches = BranchDetails;

        var PeopleBank = new Object();
        PeopleBank.Name = "PeopleNumber";
        PeopleBank.Value = peopleNumber;//$rootScope.selectedBank;

        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/People/GetBanks/[" + JSON.stringify(PeopleBank) + "]";
        var PeopleBankDetails = new Array();

        ///  alert(serviceURL);
        $.ajax({
            type: 'GET',
            headers: {
            },

            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // alert("in response");

                // var BranchDetails = new Array();

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    objPeopleBank = new Object();
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[2].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[2];
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[3].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[3];
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[17].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[17];
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[18].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[18];
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[9].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[9];
                    objPeopleBank[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[10].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[10];
                    objPeopleBank.selected = false;
                    PeopleBankDetails.push(objPeopleBank);
                }

                //for (var i = 0; i < BranchDetails.length; i++) {
                //    console.log(BranchDetails[i].Branch_name + " = " + BranchDetails[i].Branch_code);
                //}
                // $scope.BankDetails.Branches = BranchDetails;

                // alert("scope - " + $scope.Branches);

            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return PeopleBankDetails;
    };

    this.GetEntityContactDetails = function GetEntityContactDetails(peopleNumber) {


        //  $scope.BankDetails.Branches = BranchDetails;

        var PeopleContact = new Object();
        PeopleContact.Name = "PeopleNumber";
        PeopleContact.Value = peopleNumber;//$rootScope.selectedBank;

        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/PeoplePhoneLookUp/[" + JSON.stringify(PeopleContact) + "]";
        var PeopleContactDetails = new Array();

        ///  alert(serviceURL);
        $.ajax({
            type: 'GET',
            headers: {
            },

            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // alert("in response");

                // var BranchDetails = new Array();

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    objPeopleContact = new Object();
                    objPeopleContact[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    objPeopleContact[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    objPeopleContact[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[2].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[2];
                    objPeopleContact[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[3].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[3];
                    PeopleContactDetails.push(objPeopleContact);
                }

                //for (var i = 0; i < BranchDetails.length; i++) {
                //    console.log(BranchDetails[i].Branch_name + " = " + BranchDetails[i].Branch_code);
                //}
                // $scope.BankDetails.Branches = BranchDetails;

                // alert("scope - " + $scope.Branches);

            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return PeopleContactDetails;
    };


    this.GetBranchNames = function GetBranchNames(bankname) {
        //  alert(bankname);

        //  $scope.BankDetails.Branches = BranchDetails;

        var Branch = new Object();
        Branch.Name = "peopleNumber";
        Branch.Value = bankname;//$rootScope.selectedBank;

        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/BankBranchNamesLookUp/[" + JSON.stringify(Branch) + "]";
        var BranchDetails = new Array();

        ///  alert(serviceURL);
        $.ajax({
            type: 'GET',
            headers: {
            },

            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // alert("in response");

                // var BranchDetails = new Array();

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    BranchtObject = new Object();
                    BranchtObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    BranchtObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    BranchtObject.selected = false;
                    BranchDetails.push(BranchtObject);
                }

                //for (var i = 0; i < BranchDetails.length; i++) {
                //    console.log(BranchDetails[i].Branch_name + " = " + BranchDetails[i].Branch_code);
                //}
                // $scope.BankDetails.Branches = BranchDetails;

                // alert("scope - " + $scope.Branches);

            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return BranchDetails;
    };

    this.GetsharePortfolioInstruments = function GetsharePortfolioInstruments(productCode) {

        // alert("hi");

        //  alert(productCode);

        var Product = new Object();
        Product.Name = "Product";
        Product.Value = productCode;

        var serviceURL = GetSWAPDataQueryServiceHost();
        serviceURL += "DataQueries/Robotics/GetSharePortFolioDealInstrument/[" + JSON.stringify(Product) + "]";
        var ProductDetails = new Array();

        ///  alert(serviceURL);
        $.ajax({
            type: 'GET',
            headers: {
            },

            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                alert("in response");

                // var ProductDetails = new Array();

                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    ProductObject = new Object();
                    ProductObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    ProductObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    ProductObject.selected = false;
                    ProductDetails.push(ProductObject);
                }

                //for (var i = 0; i < ProductDetails.length; i++) {
                //    console.log(ProductDetails[i].Instrument_Number + " = " + ProductDetails[i].Description);
                //}
                // $scope.BankDetails.Branches = BranchDetails;

                // alert("scope - " + $scope.Branches);

            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return ProductDetails;
    };



    this.GetCurrency = function () {
        var currency = {
            currencyModel: null,
            method: [
              { id: '1', name: 'ZAR' },
              { id: '2', name: 'Pound' },
              { id: '3', name: 'Dollar' }
            ]
        };
        return currency;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };
    this.GetPaymentMethod = function () {
        var PayMethod = {
            PayModel: null,
            method: [
              { id: '1', name: 'Cash' },
              { id: '2', name: 'Cheque' }
            ]
        };
        return PayMethod;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };

  
    this.GetSharePortfolioDenomination = function () {
        var Denominations = {
            DenominationModel: null,
            availableDenominations: [
              { id: '1', name: 'Percent' },
              { id: '2', name: 'Amount' }
            ]
        };
        return Denominations;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };
    this.GetSharePortfolioMandate = function () {
        var Mandates = {
            MandateModel: null,
            availableMandates: [
              { id: '1', name: 'Discretionary' },
              { id: '2', name: 'Non Discretionary' }
            ]
        };
        return Mandates;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };
    this.GetSharePortfolioTypes = function () {
        var PortfolioType = {
            PortfolioModel: null,
            availablePortfolio: [
              { id: '1', name: 'Balanced' },
              { id: '2', name: 'Equity' }
            ]
        };
        return PortfolioType;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };

    this.GetSourceOfFunds = function () {
        var sources = {
            source: [
              { id: '1', name: 'Business Profits' },
              { id: '2', name: 'Inheritance' },
              { id: '3', name: 'Investment Proceeds' },
              { id: '4', name: 'Property Sale' },
              { id: '5', name: 'Salary' },
              { id: '6', name: 'Other' }]
        };
        return sources;

    };


    

    this.GetFTypes = function () {
        var Ftypes = {
            FundModel: null,
            types: [
              { id: 'F', name: 'Fund ' },
              { id: 'SF', name: 'Shared Portfolio' },
               { id: 'MF', name: 'Model Portfolio' }
            ]
        };
        return Ftypes;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };
    this.GetFundsForDebitOrderInstruments = function (fundType) {


        var Funds = GetFundsByType(fundType);
        return Funds;

    };


    this.GetDebitOrderFrequency = function () {
        var DFrequency = {
            DFrequencyModel: null,
            Frequency: [
              { id: '1', name: 'Monthly ' },
              { id: '2', name: 'Quarterly' },
               { id: '3', name: 'Yearly' }
            ]
        };
        return DFrequency;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };

    function GetFundsByType(funcType) {
        var serviceURL = GetSWAPDataQueryServiceHost();
        if (funcType == 'F') {
            serviceURL += "DataQueries/Robotics/FundsLookUp/";
        }
        else if (funcType == 'MF') {
            serviceURL += "DataQueries/Robotics/ModelPortfolioLookUp/";
        }
        else if (funcType == 'SF') {
            serviceURL += "DataQueries/Robotics/SharedPortfolioLookUp/";
        }

        //var ProductDetails = new Array();
        var Funds = new Array();
        ///  alert(serviceURL);
        $.ajax({
            type: 'GET',
            headers: {
            },

            url: serviceURL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            processData: true,
            async: false,
            success: function (response) {
                // alert("in response");



                for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
                    FundsObject = new Object();
                    FundsObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
                    FundsObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
                    FundsObject.selected = false;
                    Funds.push(FundsObject);
                }

                //for (var i = 0; i < SPMandateDetails.length; i++) {
                //    console.log(SPMandateDetails[i].Mandate_Description);
                //}
                //$scope.MandateTypes = SPMandateDetails;

                // alert("scope - " + $scope.Branches);

            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
        return Funds;
    };

   
    this.GetWrapFundDenomination = function () {
        var WrapFundDenomination = {
            DenominationModel: null,
            availableDenominations: [
              { id: '1', name: 'Amount' },
              { id: '2', name: 'Percentage' }
            ]
        };
        return WrapFundDenomination;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };
    this.GetWrapFundIncomeSource = function () {
        var WrapFundIncomeSource = {
            IncomeSourceModel: null,
            availableincomeSource: [
              { id: '1', name: 'Salary' },
              { id: '2', name: 'Inheitance' }
            ]
        };
        return WrapFundIncomeSource;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };
    this.GetIncomeInstruments = function () {
        var IncomeInstruments = {
            IncomeInstrumentModel: null,
            availableIncomeInstruments: [
              { id: '1', name: 'Instrument 1' },
              { id: '2', name: 'Instrument 2' }
            ]
        };
        return IncomeInstruments;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };

    this.GetDebitOrderState = function () {
        var DebitOrderState = {
            DebitOrderModel: null,
            availableDebitOrderState: [
              { id: '1', name: 'State 1' },
              { id: '2', name: 'State 2' }
            ]
        };
        return DebitOrderState;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };

    this.GetDebitOrderInstruments = function () {
        var DebitOrderInstruments = {
            DebitOrderInstrModel: null,
            availableDebitOrderInstruments: [
              { id: '1', name: 'Instrument 1' },
              { id: '2', name: 'Instrument 2' }
            ]
        };
        return DebitOrderInstruments;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };

    this.GetPhaseIn = function () {
        var PhaseIn = {
            PhaseInModel: null,
            member: [
              { id: '1', name: 'Immidiatly' },
              { id: '2', name: 'Following month' }
            ]
        };
        return PhaseIn;
        //var currency = new Array("ZAR", "Pound", "Dollar");
        //return currency;
    };



    //this.GetEntityContactDetails = function GetEntityContactDetails(entityNo) {
    //    var EntityContact = new Object();
    //    EntityContact.Name = "peopleNumber";
    //    EntityContact.Value = entityNo;

    //    var serviceURL = GetSWAPDataQueryServiceHost();
    //    serviceURL += "DataQueries/Robotics/PeoplePhoneLookUp/[" + JSON.stringify(EntityContact) + "]";
    //    var EntitytDetails = new Array();
    //    $.ajax({
    //        type: 'GET',
    //        headers: {
    //        },
    //        url: serviceURL,
    //        contentType: 'application/json; charset=utf-8',
    //        dataType: 'json',
    //        processData: true,
    //        async: false,
    //        success: function (response) {
    //            alert("in response");
    //            for (var rows = 0; rows < response.GetDataQueryResult.ResultTables[0].ResultRows.length; rows++) {
    //                EntityObject = new Object();
    //                EntityObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[0].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[0];
    //                EntityObject[response.GetDataQueryResult.ResultTables[0].ResultMetadaColumns[1].Name] = response.GetDataQueryResult.ResultTables[0].ResultRows[rows].Columns[1];
    //                EntityObject.selected = false;
    //                EntitytDetails.push(EntityObject);
    //            }
    //        },
    //        error: function (jqXHR, exception) {
    //            var msg = '';
    //            if (jqXHR.status === 0) {
    //                msg = 'Not connect.\n Verify Network.';
    //            } else if (jqXHR.status == 404) {
    //                msg = 'Requested page not found. [404]';
    //            } else if (jqXHR.status == 500) {
    //                msg = 'Internal Server Error [500].';
    //            } else if (exception === 'parsererror') {
    //                msg = 'Requested JSON parse failed.';
    //            } else if (exception === 'timeout') {
    //                msg = 'Time out error.';
    //            } else if (exception === 'abort') {
    //                msg = 'Ajax request aborted.';
    //            } else {
    //                msg = 'Uncaught Error.\n' + jqXHR.responseText;
    //            }
    //            alert(msg);
    //        }
    //    });
    //    return ProductDetails;
    //};

});

function RequestService(serviceURL, type, contentType, datatype, data) {
    var response = new Object();
    response.data = null;
    response.error = "";
    $.ajax({
        type: type,
        headers: {
        },
        url: serviceURL,
        contentType: contentType,//'application/json; charset=utf-8',
        dataType: datatype,//'json',
        async: false,
        processData: true,
        success: function (_data) {
            response.data = _data
            //$.each(data, function () {
            //    $.each(this, function (index, row) {
            //        console.log(row);
            //        var obj = row[0].ResultRows;
            //        for (var i = 0; i < obj.length; i++) {
            //            var prodObject = new Object();
            //            prodObject.id = obj[i].Columns[0];
            //            prodObject.name = obj[i].Columns[1];
            //            ArrAvailableOptions.push(prodObject);

            //            // var t = obj[i];

            //        }
            //    });
            //});
            //products.availableOptions = ArrAvailableOptions;
            //for (var i = 0; i < products.availableOptions.length; i++) {
            //    console.log(ArrAvailableOptions[i].name);
            //}
            //alert("Complete");
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            response.error = msg;
        }
    });

    return response;
}
