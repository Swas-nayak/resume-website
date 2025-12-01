// main.js - small interactions
$(function(){
  // set footer years
  const y = new Date().getFullYear();
  $('#year, #year-resume, #year-bio').text(y);

  // menu toggle (mobile)
  $('#menu-toggle').on('click', function(){
    $('.main-nav').toggle();
  });

  // smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    const target = $(this).attr('href');
    if ($(target).length) {
      $('html,body').animate({ scrollTop: $(target).offset().top - 60 }, 400);
    }
  });
});
