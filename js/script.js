$(document).ready(() => {
    // $("#introText").hide().fadeIn("medium");
    $("#menuBtn").click(() => {
      // $("#list").css("display", "block");
      // $(".menuItem").toggleClass("w3-hide");
    });
    $(document).click((e) => {
      if(!e.target.matches('#menuBtn'))
      {
        // $(".menuItem").removeClass("w3-right");
        // $(".menuItem").addClass("w3-left");
      }
    });
    $(".contactLink").click(() => {
      let scrollAmount = $("#contact").offset().top;
      $('html,body').animate({scrollTop: scrollAmount}, 750);
    });
});