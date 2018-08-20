var quizAnswers = function(one, two, three, four, five){
return parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four) + parseInt(five);
}

$(document).ready(function(){

  $("form#quizy").submit(function(event){
    var nameDisplay =$("input#name").val();
    var number1 = $("input:radio[name=num1]:checked").val();
    var number2 = $("input:radio[name=num2]:checked").val();
    var number3 = $("input:radio[name=num3]:checked").val();
    var number4 = $("input:radio[name=num4]:checked").val();
    var number5 = $("input:radio[name=num5]:checked").val();
    var result = quizAnswers(number1,number2,number3,number4,number5);
    $("#name").append(nameDisplay);
    $("#shows").text(nameDisplay  + "Your total score is:" + result + "out of 10");

    $("#quizy").hide();
    $(".scores").show();
    event.preventDefault();

  });
});
