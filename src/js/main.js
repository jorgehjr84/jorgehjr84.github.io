(function(window) {

  $(document).ready(function() {




    $('.arrow').click(function(scrollDown) {

      $('html,body').animate({
        scrollTop: $('#posts-page').offset().top
      }, 800);
    }); //End of Scroll for arrow click


    $('.posts-tab').click(function(scrollDown) {

      $('html, body').animate({
        scrollTop: $('#posts-page').offset().top
      }, 800);
    });


  }); //End of document ready function

})(window);