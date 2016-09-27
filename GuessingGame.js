$(function(){
var num1 = Math.floor(Math.random()*9) +1;
var num2 = Math.floor(Math.random()*9) +1;
var num3 = Math.floor(Math.random()*9) +1;
console.log(num1);
console.log(num2);
console.log(num3);

while( num1 == num2 || num1 == num3 || num2==num3){
     num1 = Math.floor(Math.random()*9) +1;
     num2 = Math.floor(Math.random()*9) +1;
     num3 = Math.floor(Math.random()*9) +1;

console.log(num1);
console.log(num2);
console.log(num3);
}

$("#subButton").on("click", function(){
    if ($("#in1").val() == num1){
        $("#column1").css("background-color", "green");}
    else if ($("#in1").val() == num2 || $("#in1").val() == num3){
        $("#column1").css("background-color", "yellow");}
    else $("#column1").css("background-color","red");
    
    if ($("#in2").val() == num2){
        $("#column2").css("background-color", "green");}
    else if ($("#in2").val() == num1 || $("#in2").val() == num3){
        $("#column2").css("background-color", "yellow");}
    else $("#column2").css("background-color", "red");
    
    if ($("#in3").val() == num3){
        $("#column3").css("background-color", "green");}
    else if ($("#in3").val() == num1 || $("#in3").val() == num2){
        $("#column3").css("background-color", "yellow");}
    else $("#column3").css("background-color", "red");

    if (($("#in1").val() == num1) && ($("#in2").val() == num2) && ($("#in3").val() == num3)){
        alert("You Win!!!!!!");
    }
});
$("#reload").hide();
 var currentLives = 10;

$("#subButton").on("click", function(){
    currentLives = currentLives - 1;
    $("#lives").html("You have " + currentLives + " lives left!");
   if(currentLives == 0){
    alert("You Lose");

    $("#subButton").fadeOut();
    $("#reload").fadeIn();}

});
$("#reload").on("click", function(){
        location.reload();
    });

});


function isNumberKey(evt) {
   var charCode = (evt.which) ? evt.which : event.keyCode;
   if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
       return false;
   } else {
       return true;
   }      
}

