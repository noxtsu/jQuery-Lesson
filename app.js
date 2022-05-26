$(function(){
  $('.box1').mouseover(function(){
    $('.box2').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box2').css({'background-color': '#FF0000'});
  });
 });

