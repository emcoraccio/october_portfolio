$(document).ready(function() {

  setTimeout(function() {
    $('.message1').fadeIn('slow');
  }, 250)

  setTimeout(function() {
    $('.message2').fadeIn('slow');
  }, 1200)

  setTimeout(function() {
    $('.message3').fadeIn('slow');
  }, 2200)


  // $(window).scroll(function() {
  //   let top_of_element = $("#projectsDiv").offset().top;
  //   let bottom_of_element = $("#projectsDiv").offset().top + $("#projectsDiv").outerHeight();
  //   let bottom_of_screen = $(window).scrollTop() + window.innerHeight - 40;
  //   let top_of_screen = $(window).scrollTop();
  
  //   if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
  //     $('#projectsDiv').fadeTo('slow', 1);
  //     console.log('if cond');
  //   } else {      
  //     $('#projectsDiv').fadeTo('slow', .5);
  //     console.log('else cond');
  //   }
  // });

});