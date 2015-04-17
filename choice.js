

////////// html ////////////




$(function() {
    
  $('.craig').on('click',function() {
    var name = 'craig';
    $('.craig').append(
      '<input type="radio" aria-label="..." class="bat"><label id="choice" class="lab"></label><br>');
    //$('.lab').html(name);
    
    console.log('clicked');

  });
});
   