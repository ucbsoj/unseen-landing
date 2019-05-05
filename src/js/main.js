import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS



var imgReveal = $('#top-quote').offset().top;
var topArticle = $('#text').offset().top-250;
var topImages = $('#first').offset().top-400;
var secondDelay = $('#second').offset().top-400;
var thirdDelay = $('#third').offset().top-400;
var fourthDelay = $('#fourth').offset().top-400;



$(document).scroll(function() {

  var scroll = $(document).scrollTop();


  if (scroll > 300) {

  	$(".bg-img").css({"-webkit-filter": "blur(5px)","filter": "blur(5px)" })  

  } else {

  	$(".bg-img").css({"-webkit-filter": "blur(10px)","filter": "blur(10px)" })  
  
  }

  if (scroll > imgReveal){

  	$(".bg-img").css({"-webkit-filter": "blur(0px)","filter": "blur(0px)" })  
  
  } 

  if (scroll > topArticle){

  	$("header").css("opacity",'1') 
  
  } else{
  	$("header").css("opacity",'0') 
  }

  if(scroll > topImages){
  	$( ".first-delay img" ).css('opacity','1');
  }else{
  	$( ".first-delay img" ).css('opacity','0');
  }

  if(scroll > secondDelay){
    $( ".second-delay img" ).css('opacity','1');
  }else{
    $( ".second-delay img" ).css('opacity','0');
  }

  if(scroll > thirdDelay){
    $( ".third-delay img" ).css('opacity','1');
  }else{
    $( ".third-delay img" ).css('opacity','0');
  }

  if(scroll > fourthDelay){
    $( ".fourth-delay img" ).css('opacity','1');
  }else{
    $( ".fourth-delay img" ).css('opacity','0');
  }

 
});


