var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');


    aboutMe.style.cursor = 'pointer';
    aboutMe.onclick = function() {
        window.location.href = 'index.html';
    };
    
    projects.style.cursor = 'pointer';
    projects.onclick = function() {
        window.location.href = 'index.html';
    };





$(document).ready(function(){

    










$("header").hover(
    function(){
      $(this).filter(':not(:animated)').animate({
         height:'350px'
      },400);
      
      $('#logo').filter(':not(:animated)').animate({
        height:'300px'
      },400);

      $('#menu').filter(':not(:animated)').animate({
        height:'50px'
      },400);
      
      $('.menuOption').filter(':not(:animated)').animate({
        left:'33%',
        opacity:'1'
     },200);

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
     
     $('.menuOption').animate({
        left:'-1000px',
        opacity:'0'
     },200);

    });









});