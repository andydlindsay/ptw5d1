$(document).ready(function() {
  // $('main').on('click', function() {
  //   $('main').hide(1000).delay(1000).slideDown(1000);
  // });
  $('main').click(function() {
    $('main').hide(1000).delay(1000).slideDown(1000);
  });
  $('main').on('mouseenter', function() {
    $('.first-square').hide(1000).show(1000);
  });
  $('main').on('mouseleave', function() {
    $('.second-square').hide(500).show(500).hide(500).show(500);
  });
});
