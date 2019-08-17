$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var q1 = $("input#question1").val();
    var q2 = $("input#question2").val();
    var q3 = $("input#question3").val();
    var q4 = $("input#question4").val();
    var q5 = $("input#question5").val();
    var q6 = $("input#question6").val();

    var result;

    if (q1 && q2 === "yes")
      result = ("Python");
    else if (q3 && q4 === "yes")
      result = ("JavaScript");
    else (q5 && q6 === "yes") ;
      result = ("Ruby");


    $("#answer").text(result);
  });
});
