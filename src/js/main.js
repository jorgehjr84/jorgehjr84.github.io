(function(window) {

  $(document).ready(function() {




    $('.arrow').click(function(scrollDown) {

      $('html,body').animate({
        scrollTop: $('#posts-page').offset().top
      }, 800);
    })

    // $('html, body').animate({
    //     scrollTop: $("#target-element").offset().top
    // }, 1000);

  }); //End of document ready function

})(window);