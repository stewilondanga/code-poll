$(document).ready(function() {
  $("#container div a").click(function() {
    $(this).parent().animate({
      width: '+=100px'
    }, 500);

    $(this).prev().html(parseInt($(this).prev().html()) + 1);
    return false;
  });
});

var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
