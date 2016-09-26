$(function () {
    $("#calculate").on("click", calculateTipVariables);
    $("#tipResult").hide();
});

function calculateTipVariables(){
    var billAmount = $("#billText").val();
    var service = $("#serviceSelect").val();
    var split = $("#billSplit").val();
    console.log(billAmount);
    console.log(service);
    console.log(split);
    calculateTip(billAmount, service, split);
}

function calculateTip(billAmount, service, split){
var result = (+billAmount * +service / +split).toFixed(2);
console.log(result);
$("#totalTip").append("$" + result);
$("#tipResult").fadeIn();
}