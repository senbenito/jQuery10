$(document).ready(function() {
$("#jQueryCodeBtn").click(function (){
  $("#content").find("h3").eq(2).text("monkeys!");
});
$("#noEq2Btn").click(function (){
  $("#content").find("h3").text("monkeys!");
});
});
