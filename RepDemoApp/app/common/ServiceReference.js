var configurationVariables = {
    maintenanceInProgress: 0
};
function GetHostName() {
   
    return "http://" + "obelixdev02" + "/";
}
function GetServiceHost() {
    return GetHostName();
}

function GetSWAPDataQueryServiceHost() {
    return GetHostName() + "SWAPDataQueryService/v1/";

}

function GetSWAPDataQueryServiceHostV2() {
    return GetHostName() + "SWAPDataQueryService/v2/DataQueries/Lite/";
}

function GetSwitchDataServiceHost() {
    return GetHostName() + "SwitchDataService/v1/";
}

function GetDealTransferTransactionServiceHost() {
    return GetHostName() + "DealTransferTransactionService/v1/CaptureDealTransfer";
}
function GetDealTransferDataServiceHost() {
    return GetHostName() + "DealTransferDataService/v1";
    
}