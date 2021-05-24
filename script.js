
$(document).ready(function(){

$("header").hover(
    function(){
      $(this).filter(':not(:animated)').animate({
         height:'350px'
      },400);
      
      $('#logo').animate({
        height:'300px'
      },400);

      $('#menu').animate({
        height:'50px'
      },400);
      $('#menuOption').animate({
        height:'50px'
      },400);


    },
    function() {
      $(this).animate({
         height:'50px'
      },200);

      $('#logo').animate({
        height:'50px'
     },200);
     $('#menu').animate({
        height:'0px'
     },200);
     $('#menuOption').animate({
        height:'0px'
     },200);

    });

});