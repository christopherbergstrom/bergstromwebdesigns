$(document).ready(() => {
    $("#menuBtn").click(function()
    {
      // $("#list").css("display", "block");
      $(".menuItem").toggleClass("w3-hide");
    });
    $(document).click(function(e)
    {
      if(!e.target.matches('#menuBtn'))
      {
        $(".menuItem").addClass("w3-left");
      }
    });
});