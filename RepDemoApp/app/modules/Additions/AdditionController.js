

angular.module('RepurchaseDemo').controller('AdditionsController', ['$rootScope', '$scope', 'ngDialog', '$http', '$filter', '$state', 'AdditionService',
    function ($rootScope, $scope, ngDialog, $http, $filter, $state, AdditionService) {


        var paymentMethodData = new Array();
        var BeneficiaryData = new Array();
        var FundData = new Array();
        var IncomeInstrumentData = new Array();
        var incomesourceArray = new Array();
        var DebitOrderInstrumentData = new Array();
        var PhaseInstrumentData = new Array();
        var payMethodCounter = 0;
        var BenCounter = 0;
        var FundCounter = 0;
        var IncomeInstrumentCounter = 0;
        var DebitOrderInstrumentCounter = 0;
        var lumsumCounter = 0;
        var PhaseInstrumentCounter = 0;
        var ObjectContainer = new Array();
        var productdatavalue;
        var products = new Object();
        var lumpsumData = new Array();
        var DOinstrData = new Array();
        var currency = {};


        $(document).ready(function () {
            InitialiseObjects();
        });



        $scope.switchDropDowns = function () {
            if ($scope.OnceOffDebit.BankCapture == 'Existing') {
                $scope.OnceOffDebit.hidedrd = false;
                $scope.OnceOffDebit.hidetxt = true;
                $scope.OnceOffDebit.selectedBranch = '';
                $scope.OnceOffDebit.BranchCode = '';
                var existingBankNames = new Array();
                //  var existingBankDetails = $scope.ExistingBankDetail;
                var existingBankDetails = $scope.ExistingBankDetail;
                if (!angular.isUndefined(existingBankDetails)) {


                    for (var i = 0; i < existingBankDetails.length ; i++) {
                        var existingBank = new Object();
                        existingBank.InstitutionNumber = existingBankDetails[i].InstitutionNumber;
                        existingBank.Institution = existingBankDetails[i].Institution;
                        existingBank.Branch = existingBankDetails[i].Branch;
                        existingBank.BranchNumber = existingBankDetails[i].BranchNumber;
                        existingBank.AccountTypeName = existingBankDetails[i].AccountTypeName;
                        existingBank.AccountHolderName = existingBankDetails[i].AccountHolderName;
                        existingBank.AccountNumber = existingBankDetails[i].AccountNumber;
                        existingBankNames.push(existingBank);
                    }
                }
                $scope.OnceOffDebit.BankNames = existingBankNames;
            }
            else if ($scope.OnceOffDebit.BankCapture == 'New') {
                $scope.OnceOffDebit.BankNames = AdditionService.GetBankNames();
                $scope.OnceOffDebit.BranchCode = '';
                $scope.OnceOffDebit.hidetxt = false;
                $scope.OnceOffDebit.hidedrd = true;
                $scope.OnceOffDebit.selectedBank = '';
                $scope.OnceOffDebit.selectedBranch = '';
                $scope.OnceOffDebit.AccountHolderName = '';
                $scope.OnceOffDebit.AccountNumber = '';
                $scope.OnceOffDebit.AccountTypeName = '';

            }
        };

        $scope.switchDebitOrderBankDetailDropDowns = function () {
            if ($scope.DebitOrderBankDetails.BankCapture == 'Existing') {
                $scope.DebitOrderBankDetails.hidedrd = false;
                $scope.DebitOrderBankDetails.hidetxt = true;
                $scope.DebitOrderBankDetails.selectedBranch = '';
                $scope.DebitOrderBankDetails.BranchCode = '';
                var existingBankNames = new Array();
                //  var existingBankDetails = $scope.ExistingBankDetail;
                var existingBankDetails = $scope.ExistingBankDetail;
                if (!angular.isUndefined(existingBankDetails)) {


                    for (var i = 0; i < existingBankDetails.length ; i++) {
                        var existingBank = new Object();
                        existingBank.InstitutionNumber = existingBankDetails[i].InstitutionNumber;
                        existingBank.Institution = existingBankDetails[i].Institution;
                        existingBank.Branch = existingBankDetails[i].Branch;
                        existingBank.BranchNumber = existingBankDetails[i].BranchNumber;
                        existingBank.AccountTypeName = existingBankDetails[i].AccountTypeName;
                        existingBank.AccountHolderName = existingBankDetails[i].AccountHolderName;
                        existingBank.AccountNumber = existingBankDetails[i].AccountNumber;
                        existingBankNames.push(existingBank);
                    }
                }
                $scope.DebitOrderBankDetails.BankNames = existingBankNames;
            }
            else if ($scope.DebitOrderBankDetails.BankCapture == 'New') {
                $scope.DebitOrderBankDetails.BankNames = AdditionService.GetBankNames();
                $scope.DebitOrderBankDetails.BranchCode = '';
                $scope.DebitOrderBankDetails.hidetxt = false;
                $scope.DebitOrderBankDetails.hidedrd = true;
                $scope.DebitOrderBankDetails.selectedBank = '';
                $scope.DebitOrderBankDetails.selectedBranch = '';
                $scope.DebitOrderBankDetails.AccountHolderName = '';
                $scope.DebitOrderBankDetails.AccountNumber = '';
                $scope.DebitOrderBankDetails.AccountTypeName = '';

            }
        };


        $scope.cpChange = function () {
            if ($scope.DealDetails.confirmed == "false")
                $scope.DealDetails.isdisabled = true;
            else
                $scope.DealDetails.isdisabled = false;


        };

        $scope.$watch('DebitOrderInstrument.selectedFundType', function (newValue, oldValue) {
            if (!angular.isUndefined(newValue)) {
                $scope.DebitOrderInstrument.selectedFund = '';
                $scope.DebitOrderInstrument.Allocation = 0;
                $scope.DebitOrderInstrument.FundNames = null;
                $scope.DebitOrderInstrument.FundNames = GetFundsForDebitOrderInstruments(newValue);
                for (var i = 0; i < $scope.DebitOrderInstrument.FundNames.length; i++) {
                    console.log($scope.DebitOrderInstrument.FundNames[i].Description);
                }
            }
        });

        $scope.$watch('OnceOffDebit.selectedBank', function (newValue, oldValue) {
            if (!angular.isUndefined(newValue) && newValue != "") {
                if (!$scope.OnceOffDebit.hidetxt) {
                    $scope.OnceOffDebit.BranchNames = AdditionService.GetBranchNames(newValue.People_Number);
                }
                else {
                    $scope.OnceOffDebit.selectedBranch = newValue.Branch;
                    $scope.OnceOffDebit.People_Number = newValue.People_Number;//newValue;
                    $scope.OnceOffDebit.BranchCode = newValue.BranchNumber;
                    $scope.OnceOffDebit.AccountTypeName = newValue.AccountTypeName;
                    $scope.OnceOffDebit.AccountHolderName = newValue.AccountHolderName;
                    $scope.OnceOffDebit.AccountNumber = newValue.AccountNumber;

                }
            }
        });

        $scope.$watch('OnceOffDebit.selectedBranch', function (newValue, oldValue) {
            if (!angular.isUndefined(newValue) && newValue != "") {
                if (!$scope.OnceOffDebit.hidetxt) {
                    $scope.OnceOffDebit.BranchCode = newValue.Branch_code;
                }
            }
        });

        $scope.$watch('DebitOrderBankDetails.selectedBank', function (newValue, oldValue) {

            if (!angular.isUndefined(newValue) && newValue != "") {

                if (!$scope.DebitOrderBankDetails.hidetxt) {

                    $scope.DebitOrderBankDetails.BranchNames = AdditionService.GetBranchNames(newValue.People_Number);

                }
                else {
                    $scope.DebitOrderBankDetails.selectedBranch = newValue.Branch;
                    $scope.DebitOrderBankDetails.People_Number = newValue.People_Number;
                    $scope.DebitOrderBankDetails.BranchCode = newValue.BranchNumber;
                    $scope.DebitOrderBankDetails.AccountTypeName = newValue.AccountTypeName;
                    $scope.DebitOrderBankDetails.AccountHolderName = newValue.AccountHolderName;
                    $scope.DebitOrderBankDetails.AccountNumber = newValue.AccountNumber;
                   
                }
                
            }
        });

        $scope.$watch('DebitOrderBankDetails.selectedBranch', function (newValue, oldValue) {
            if (!angular.isUndefined(newValue) && newValue != "") {
                if (!$scope.DebitOrderBankDetails.hidetxt) {
                    $scope.DebitOrderBankDetails.BranchCode = newValue.Branch_code;
                }
            }
        });

        $scope.$watch('LumpSumDetails.selectedFundType', function (newValue, oldValue) {
            if (!angular.isUndefined(newValue)) {
                $scope.LumpSumDetails.selectedFund = '';
                $scope.LumpSumDetails.Allocation = 0;
                $scope.LumpSumDetails.FundNames = null;
                $scope.LumpSumDetails.FundNames = GetFundsForDebitOrderInstruments(newValue);
                for (var i = 0; i < $scope.LumpSumDetails.FundNames.length; i++) {
                    console.log($scope.LumpSumDetails.FundNames[i].Description);
                }
            }
        });

        $scope.cplumpsumChange = function () {
            if ($("#divLumpSum").is(":visible")) {
                $("#divLumpSum").css("display", "none");
            }
            else {
                $("#divLumpSum").css("display", "block");
            }





        };

        function GetFundsForDebitOrderInstruments(fundType) {
            var fundnames = AdditionService.GetFundsForDebitOrderInstruments(fundType);
            return fundnames;
        };

        $scope.GetEntityDetails = function () {
            if ($scope.ContractDetails.entityNumber > 0) {
                var entityExistingBankDetails = AdditionService.GetEntityExistingBankDetails($scope.ContractDetails.entityNumber);
                var entityContactDetails = AdditionService.GetEntityContactDetails($scope.ContractDetails.entityNumber);
                $scope.OnceOffDebit.BankNames = entityExistingBankDetails;
                $scope.DebitOrderBankDetails.BankNames = entityExistingBankDetails;
                $scope.ExistingBankDetail = entityExistingBankDetails;
                if (entityContactDetails != 'undefined' || entityContactDetails != null) {
                    for (var i = 0; i < entityContactDetails.length; i++) {
                        if (entityContactDetails[i].Phone_Type == 'C') {
                            $scope.ContractDetails.mobileNumber = entityContactDetails[i].Phone_Number;
                        }
                        if (entityContactDetails[i].Phone_Type == 'EM') {
                            $scope.ContractDetails.emailId = entityContactDetails[i].Phone_Number;
                        }
                        if (entityContactDetails[i].Phone_Type == 'BS') {
                            $scope.ContractDetails.workTelNo = entityContactDetails[i].Phone_Number;
                        }
                        if (entityContactDetails[i].Phone_Type == 'HM') {
                            $scope.ContractDetails.homeTelNo = entityContactDetails[i].Phone_Number;
                        }
                        if (entityContactDetails[i].Phone_Type == 'FX') {
                            $scope.ContractDetails.faxNumber = entityContactDetails[i].Phone_Number;
                        }
                    }
                }
            }


        };



        $scope.GetBranches = function () {
            var BankName = $scope.OnceOffDebit.selectedBank;
            $scope.BankDetails.Branches = AdditionService.GetBranchNames(BankName);
        };

        function InitialiseObjects() {

            $scope.ContractDetails = {
                awdNumber: '0',
                receivedDate: new Date(),
                receivedTime: '',
                entityNumber: '0',
                contractNumber: '0',
                mobileNumber: '',
                faxNumber: '',
                homeTelNo: '',
                workTelNo: '',
                emailId: ''
            };

            $scope.DealDetails = {
                dealNumber: 0,
                Productdata: AdditionService.GetProducts(),
                Currencydata: AdditionService.GetCurrency(),
                AddExistingDeal: 'NO',
                selectedProduct: null,
                confirmed: false,
                isdisabled: false
            };

            $scope.LumpSumDetails = {
                lumpsum: 'false',
                InvetmentAmount: 0,
                MissedDOPayemnt: 'false',
                FundTypes: AdditionService.GetFTypes(),
                Type: "",
                FundNames: {},
                Allocation: 0,
                FundData: null,
                selectedMissedDOPayemnt: false
            };

            $scope.DebitOrderDetails = {
                DebitOrderFrequency: AdditionService.GetDebitOrderFrequency(),
                DebitOrderAmount: 0,
                Escalation: "NO",
                EscalationDate: '',
                EscalationPecentage: 0,
                DebitOrderDate: new Date()
            };

            $scope.DebitOrderInstrument = {
                FundTypes: AdditionService.GetFTypes(),
                FundNames: {},
                Allocation: 0,
                DebitOrderInstrumentsData: {},
                DebitOrderInstrumentsDatas: []
            };
            $scope.DebitOrderBankDetails = {
                TPBD: 'false',
                BankCapture: 'Existing',
                BankNames: "",
                BranchNames: null,
                Code: '',
                AccountHolderName: '',
                AccountNumber: '',
                AccountType: AdditionService.GetAccountType(),
                hidetxt: true,
                hidedrd: false

            };

            $scope.BrokerDetails = {
                BrokerNames: AdditionService.getBrokerNames(),
                CommissionSplit: '100%',
                InitiallumpsumFee: 0,
                InitialdebitOrderFee: 0,
                AnnualFee: 0,
                AnnualFeeSP: 0,
                AnnualFeeRebate: 0
            };
            $scope.PhaseIn = {
                IsPhaseIn: 'false',
                Phase: AdditionService.GetPhaseIn(),
                NoOfOcc: 0
            };

            $scope.OnceOffDebit = {
                IsOnceOff: 'false',
                Amount: 0,
                BankCapture: 'Existing',
                BankNames: '',
                BranchNames: null,
                BranchCode: '',
                AccountHolderName: '',
                AccountNumber: '',
                AccountType: AdditionService.GetAccountType(),
                selectedBranch: '',
                People_Number: 0,
                AccountTypeName: '',
                hidetxt: true,
                hidedrd: false
            };

            $scope.BeneficiaryDetails = {
                FirstName: "",
                LastName: "",
                Percent: "",
                BeneficiaryData: null
            };
            $scope.IncomeInstrumentDetails = {
                IncomeInstrumentdata: null,
                ActualAllocation: 0,
                Percentage: 0,
                IncomeInstrData: null
            };
            $scope.SourceOfFunds = {
                Sources: AdditionService.GetSourceOfFunds(),
                OtherText: "",
                hidesource: true

            };

        };

        // ---------------------- Methods to add into datagrid----------------

        $scope.DeleteDebitOrderInstrumentsDetail = function (srno) {

            var index = $scope.DebitOrderInstrument.DebitOrderInstrumentsDatas.indexOf(srno);
            $scope.DebitOrderInstrument.DebitOrderInstrumentsDatas.splice(index - 1, 1);
        };
        $scope.AddLumpSumDetail = function (LumpSumDetails) {

            var lumsum = new Object();

            lumsumCounter += 1;
            lumsum.FundType = LumpSumDetails.selectedFundType;
            lumsum.FundName = LumpSumDetails.selectedFund.Description;
            lumsum.Allocation = LumpSumDetails.Allocation;
            lumpsumData.push(lumsum);

            $scope.LumpSumDetails.FundData = lumpsumData;
           // $scope.DebitOrderInstrument.DebitOrderInstrumentsData = lumpsumData;
            $scope.DebitOrderInstrument.DebitOrderInstrumentsDatas.push(lumsum);

        };
        $scope.AddDebitOrderInstrDetails = function (DebitOrderInstruments) {

            var DOInstr = new Object();

            //DOInstrCounter += 1;
            DOInstr.FundType = DebitOrderInstruments.selectedFundType;
            DOInstr.FundName = DebitOrderInstruments.selectedfname.Description;
            DOInstr.Allocation = DebitOrderInstruments.Allocation;
            DOinstrData.push(DOInstr);

            $scope.DebitOrderInstrument.DebitOrderInstrumentsDatas.push(DOInstr);


        };
        $scope.DeleteLumpSumDetail = function (srno) {

            var index = $scope.LumpSumDetails.FundData.indexOf(srno);
            $scope.LumpSumDetails.FundData.splice(index - 1, 1);
        };

        //Start Of Note:Below commented code is needed in future

        //$scope.AddBeneficiaryDetails = function (BeneficiaryDetails) {

        //    var Beneficiary = new Object();
        //    BenCounter += 1;
        //    Beneficiary.FirstName = BeneficiaryDetails.FirstName;
        //    Beneficiary.LastName = BeneficiaryDetails.LastName;
        //    Beneficiary.BenefitPercent = BeneficiaryDetails.Percent;
        //    Beneficiary.srno = BenCounter;
        //    BeneficiaryData.push(Beneficiary);
        //    $scope.BeneficiaryDetails.BeneficiaryData = BeneficiaryData;
        //    //alert(PaymentMethod);
        //};
        //$scope.DeleteBeneficiaryDetails = function (srno) {

        //    var index = $scope.BeneficiaryDetails.BeneficiaryData.indexOf(srno);
        //    $scope.BeneficiaryDetails.BeneficiaryData.splice(index - 1, 1);
        //};

        //$scope.AddIncomeInstrumentDetails = function (IncomeInstrumentDetails) {

        //    var IncomeInstrument = new Object();
        //    IncomeInstrumentCounter += 1;
        //    IncomeInstrument.InstrumentName = $scope.selectIncomeInstrument;
        //    IncomeInstrument.ActualAllocation = IncomeInstrumentDetails.ActualAllocation;
        //    IncomeInstrument.Percentage = IncomeInstrumentDetails.Percentage;

        //    IncomeInstrument.srno = IncomeInstrumentCounter;
        //    IncomeInstrumentData.push(IncomeInstrument);
        //    $scope.IncomeInstrumentDetails.IncomeInstrData = IncomeInstrumentData;
        //    //alert(PaymentMethod);
        //};
        //$scope.DeleteIncomeInstrumentDetails = function (srno) {

        //    var index = $scope.IncomeInstrumentDetails.IncomeInstrData.indexOf(srno);
        //    $scope.IncomeInstrumentDetails.IncomeInstrData.splice(index - 1, 1);
        //};

        //End Of Note









        //------------------ handle xml generate-------------------







      


        $scope.GenerateXML = function () {

            //if ($scope.BeneficiaryDetails.BeneficiaryData == null) {
            //    $scope.BeneficiaryDetails.BeneficiaryData = '';
            //}
            //if ($scope.FundDetails.FundData == null) {
            //    $scope.FundDetails.FundData = '';
            //}

            //if ($scope.IncomeInstrumentDetails.IncomeInstrData == null) {
            //    $scope.IncomeInstrumentDetails.IncomeInstrData = '';
            //}
            if ($scope.DebitOrderInstrument.DebitOrderInstrdata == null) {
                $scope.DebitOrderInstrument.DebitOrderInstrdata = '';
            }
            var MainObject = {
                ContractDetails: {
                    AWDNumber: $scope.ContractDetails.awdNumber,
                    ReceivedDate: $scope.ContractDetails.receivedDate,
                    ReceivedTime: $scope.ContractDetails.receivedTime,
                    EntityNumber: $scope.ContractDetails.entityNumber,
                    ContractNumber: $scope.ContractDetails.contractNumber,
                    MobileNumber: $scope.ContractDetails.mobileNumber,
                    FaxNumber: $scope.ContractDetails.faxNumber,
                    WorkTelNo: $scope.ContractDetails.workTelNo,
                    EmailId: $scope.ContractDetails.emailId,
                    HomeTel: $scope.ContractDetails.homeTelNo

                },
                DealDetails: {
                    AddExistingDeal: $scope.DealDetails.confirmed,
                    DealNumber: $scope.DealDetails.dealNumber,
                    Product: $scope.DealDetails.selectedProduct,
                    Currency: $scope.selectedcurrency

                },
                BrokerDetails: {
                    BrokerName: $scope.BrokerDetails.selectedBrokerName,
                    CommissionSplit: $scope.BrokerDetails.CommissionSplit,
                    InitialFee: $scope.BrokerDetails.InitiallumpsumFee,
                    DebitOrderFee: $scope.BrokerDetails.InitialdebitOrderFee,
                    AnnualFee: $scope.BrokerDetails.AnnualFee,
                    AnnualFeeSF: $scope.BrokerDetails.AnnualFeeSP,
                    AnnualFeeRebate: $scope.BrokerDetails.AnnualFeeRebate,
                    MissedDebitOrder: $scope.BrokerDetails.MissedDebitOrder
                },
                LumpSumDetails: {
                    IsLumpSum: $scope.LumpSumDetails.selectedlumpsum,
                    InvestmentAmount: $scope.LumpSumDetails.InvetmentAmount,
                    MissedDebitOrder: $scope.LumpSumDetails.selectedMissedDOPayemnt,
                    FundDetails: $scope.LumpSumDetails.FundData
                },
                PhaseIn: {
                    IsPhaseIn: $scope.IsPhaseIn,
                    SelectedPhaseIn: $scope.PhaseIn.selectedPhaseIn,
                    NoOfOccurances: $scope.PhaseIn.NoOfOcc
                },
                OnceOffDebit: {
                    SpecifyOnceOffDebit: $scope.OnceOffDebit.IsOnceOff,
                    Amount: $scope.OnceOffDebit.Amount,
                    UseExistingBank: $scope.OnceOffDebit.BankCapture,
                    BankName: ($scope.OnceOffDebit.BankCapture == 'Existing' ? $scope.OnceOffDebit.selectedBank.Institution : $scope.OnceOffDebit.selectedBank.BankName),
                    BankNumber: ($scope.OnceOffDebit.BankCapture == 'Existing' ? $scope.OnceOffDebit.selectedBank.InstitutionNumber : $scope.OnceOffDebit.selectedBank.People_Number),
                    BranchName: $scope.OnceOffDebit.selectedBranch,
                    BranchCode: $scope.OnceOffDebit.BranchCode,
                    AccountHolderName: $scope.OnceOffDebit.AccountHolderName,
                    AccountTypeName: $scope.OnceOffDebit.AccountTypeName

                },
                DebitOrderDetails: {
                    SpecifyDebitOrderInc: $scope.DebitOrderDetails.selectedDebitOrderInv,
                    DebitOrderFrequency: $scope.selectedDOFrequency,
                    Amount: $scope.DebitOrderDetails.DebitOrderAmount,
                    Escalation: $scope.DebitOrderDetails.Escalation,
                    EscalationDate: $scope.DebitOrderDetails.EscalationDate,
                    EscalationPecentage: $scope.DebitOrderDetails.EscalationPecentage,
                    DebitOrderDate: $scope.DebitOrderDetails.DebitOrderDate,
                    DebitOrderInstruments: $scope.DebitOrderInstrument.DebitOrderInstrumentsData,
                    ThirdPartyBankDetails: $scope.DebitOrderBankDetails.TPBD,
                    UseExistingBank: $scope.DebitOrderBankDetails.BankCapture,
                    BankName: ($scope.DebitOrderBankDetails.BankCapture == 'Existing' ? $scope.DebitOrderBankDetails.selectedBank.Institution : $scope.DebitOrderBankDetails.selectedBank.BankName),
                    BankNumber: ($scope.DebitOrderBankDetails.BankCapture == 'Existing' ? $scope.DebitOrderBankDetails.selectedBank.InstitutionNumber : $scope.DebitOrderBankDetails.selectedBank.People_Number),
                    BranchName: $scope.DebitOrderBankDetails.selectedBranch,
                    BranchCode: $scope.DebitOrderBankDetails.BranchCode,
                    AccountHolderName: $scope.DebitOrderBankDetails.AccountHolderName,
                    AccountNumber: $scope.DebitOrderBankDetails.AccountNumber,
                    AccountTypeName: $scope.DebitOrderBankDetails.AccountTypeName
                },
                SourceOfFunds: {
                    source: $scope.SourceOfFunds.selectedSourceOfFunds,
                    Other: $scope.SourceOfFunds.OtherText

                }

            };
            ObjectContainer.push(MainObject)
            json2xml(eval(JSON.stringify(ObjectContainer)), "Additions", function (xml) {

                var xmlObjects = {
                    'xmlObject': xml
                };
                alert(JSON.stringify(xmlObjects));
                alert("going to call service");
                $.ajax({
                    type: 'POST',
                    headers: {
                    },
                    url: 'http://localhost/TestService/Service1.svc/SaveFile',
                    data: JSON.stringify(xmlObjects),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    processData: true,
                    success: function (data, status, jqXHR) {
                        alert("success from save file");
                    },
                    error: function (xhr) {
                        alert("error from savefile");
                    }
                });


            });

        };


    }]);

























