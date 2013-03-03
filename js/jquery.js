$('.menu ul li').css(
    {
      "-webkit-transition" : "all 1000ms",
      "padding-left":"3px"
    }
  );


$('.menu ul li').mouseover(function(){
  $(this).css(
    {
      "margin-left":"30px"
    }
  );
});

$(".menu ul li").mouseout(function(){
  $(this).css(
    {
      "margin-left":"0px"
    }
  );
});