/*(function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('#main-header');
    
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() <10) {
          $navbar.addClass('hide');
        } else {
          $navbar.removeClass('hide');
        }
      }, 100);
    });
  }());
  */

 /*$(window).scroll(function(){
  $("#introText").css("opacity", 1 - $(window).scrollTop() / 250);
});
*/


