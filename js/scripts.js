var quizAnswers = function(one, two, three, four, five){
return one + two + three + four + five;


}

$(document).ready(function(){
  $(".begin").click(function(){
    $("#quizy").fadeToggle("slow");
  });

  $("form#quizy").submit(function(event){
    var number1 = parseInt($("input:radio[name=num1]:checked").val());
    var number2 = parseInt($("input:radio[name=num2]:checked").val());
    var number3 = parseInt($("input:radio[name=num3]:checked").val());
    var number4 = parseInt($("input:radio[name=num4]:checked").val());
    var number5 = parseInt($("input:radio[name=num5]:checked").val());
    var result = quizAnswers(number1, number2, number3, number4, number5);

    $("#shows").text("Your total score is" + result + "out of 10");

    event.preventDefault();
    $(".scores").show();
  });
});
