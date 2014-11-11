$(document).ready(function() {
  
  $('section').on({
    'mouseover': wider,
    'mouseleave': average
  });
  
  function wider() {
    $('section').removeClass('average').not($(this)).addClass('narrow');
    $(this).addClass('wide');
  }
  
  function average() {
    $('section').removeClass('narrow wide').addClass('average');
  }
  
});