const rate = $(".rate");
var buttonSelected = "0";
$(".topB").hide();
$(".botB").hide();


$('.rate1').bind('click', function() {
    buttonSelected = "1";
    console.log(buttonSelected);
  });
  $('.rate2').bind('click', function() {
    buttonSelected = "2";
    console.log(buttonSelected);
  });
  $('.rate3').bind('click', function() {
    buttonSelected = "3";
    console.log(buttonSelected);
  });
  $('.rate4').bind('click', function() {
    buttonSelected = "4";
    console.log(buttonSelected);
  });
  $('.rate5').bind('click', function() {
    buttonSelected = "5";
    console.log(buttonSelected);
  });


    $(".submit").on("click", function(){
      $(".top").hide();
      $(".mid").hide();
      $(".bot").hide();
      $(".topB").show();
      $(".botB").show();
    
      $(".selectedText").text("You selected " +buttonSelected + " out of 5");
    });
  

