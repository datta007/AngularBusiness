
angular.module('RepurchaseDemo').controller('RepurchaseHomeScreenController', ['$rootScope', '$scope', 'ngDialog', '$http', '$filter', '$state', function ($rootScope, $scope, ngDialog, $http, $filter, $state) {

   
    //#region Default Variables
    //$rootScope.menuid = 1;
    
    $scope.convertToXML = function () {
       
        var inputarray = new Array();
        var inputobject = new Object();
       
        $scope.WebNo = $rootScope.Webref;
        inputobject.WebReferenceNumber = $scope.WebNo;
       
        inputarray.push(inputobject);
        var inputobject = new Object()        
        inputobject.RecieveDate = $rootScope.ReceiveDate;
        inputarray.push(inputobject);
        var inputobject = new Object()        
        inputobject.RecieveTime = $rootScope.ReceiveTime;
        inputarray.push(inputobject);
        var inputobject = new Object()        
        inputobject.FloorLimit = $scope.floorlimit;
        inputarray.push(inputobject);
        var inputobject = new Object()
        if($scope.isROT==undefined)
            inputobject.isROT_Document_attached = false;
        else
            inputobject.isROT_Document_attached = $scope.isROT;
        inputarray.push(inputobject);
        var inputobject = new Object()
        if ($scope.isSurrender == undefined)
            inputobject.isSurrender_Calc_attached = false;
        else
            inputobject.isSurrender_Calc_attached = $scope.isSurrender;

        inputarray.push(inputobject);
        var inputobject = new Object()
        if ($scope.isDocument == undefined)
            inputobject.isDocumentStamped = false;
        else
            inputobject.isDocumentStamped = $scope.isDocument;

        inputarray.push(inputobject);
        //inputarray.push(inputobject);
       

        var xml2 = json2xml(eval(JSON.stringify(inputarray)));
        //xml2 = '<Element><newelement>pooja</newelement></Element>'
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        // var parser = new DOMParser();
        xmlDoc.loadXML(xml2);
        xmlDoc.save("D:\XML\Mtxml.xml");
        // parser.parseFromString(xml2, "text/xml");
        /*var fso = new ActiveXObject("Scripting.FileSystemObject");
        var FILENAME = "D:\\";
        var file = fso.CreateTextFile(FILENAME, true);
        file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
        file.WriteLine(xml2);*/
    }

       
    
    //var grid;
    //$scope.gridSettings =
    //{

    //    width: 850,
    //    created: function(args)
    //    {
    //        grid = args.instance;
    //    },
    //    pageable: true,
    //    source:    new $.jqx.dataAdapter(  {
    //        localData: generateData(100),
    //        dataType: "array",
    //        dataFields:
    //        [
    //            { name: 'firstName', type: 'string' },
    //            { name: 'lastname', type: 'string' },
               
    //        ]
    //    }),
    //    altRows: true,
    //    sortable: true,
    //    columns: [
    //      { text: 'First Name', dataField: 'firstname', width: 190 },
    //      { text: 'Last Name', dataField: 'lastname', width: 190 },
          
    //    ]
    //};

    
    
    //$scope.SelectedRepurchaseType = {};

    //$scope.repTypesSelected = function () {
    //    $rootScope.SelectedRepurchaseType = $scope.SelectedRepurchaseType;
    //    $rootScope.$emit("showRepurchasetype", {});
    //}    

    //$rootScope.$on("ResetRepurchaseType", function () {
    //    $scope.SelectedRepurchaseType = null;
    //    $rootScope.SelectedRepurchaseType = null;
    //    GetRepurchaseTypes();
    //    $rootScope.$emit("ShowRepurchaseTypeMethod", {});
    //});

    //$scope.init = function () {
    //    GetRepurchaseTypes();
    //}

    //function GetRepurchaseTypes() {        
    //    $scope.RepurchaseTypes = [{ key: 'P', value: 'Pre-Retirement Withdrawal' }, { key: 'R', value: 'Retirement' }, { key: 'S', value: 'Section 14 transfer' }, { key: 'D', value: 'Death Claim' }, { key: 'C', value: 'Divorce Orders' }];
    //}

    //$scope.init();

    
    //$scope.Repurchases = [{ key: 'P', value: 'Pre-Retirement Withdrawal' }, { key: 'R', value: 'Retirement' }, { key: 'S', value: 'Section 14 transfer' }, { key: 'D', value: 'Death Claim' }, { key: 'C', value: 'Divorce Orders' }];
   // $rootScope.TypeofRepurchase = [{ key: '1', value: 'Transfer' }, { key: '2', value: 'Death Claim' }, { key: '3', value: 'Divorce' }];
   
    //if (typeof $rootScope.TypeofRepurchase === "undefined")
    //    $rootScope.TypeofRepurchase = {};

    //$scope.fShowSearch = function (TType) {
    //    $rootScope.TransferType = TType;
    //    $rootScope.showSearch = true;

    //}
}]);





