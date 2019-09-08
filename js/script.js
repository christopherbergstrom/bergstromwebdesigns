$(document).ready(() => {
  // mouse enters, menuBtn circle changes to random color
  $("#menuBtn").mouseenter(() => {
    let color = changeColors();
    $("#menuBtn").css("color", color);
    // click on menuBtn while hovering changes main color and menuItem hover colors
    $("#menuBtn").click(() => {
      $(".mainColor").css("color", color);
      $("input[type=submit]").css("background-color", color);
      // changes menuItem color to new color
      $(".menuItem").mouseenter(function() {
        console.log($(this));
        $(this).css("color", color);
      // changes menuItem back to normal color
      }).mouseleave(function() {
        $(this).css("color", "#fff");
      });
    // changes menuBtn back to normal color
    }).mouseleave(() => {
      $("#menuBtn").css("color", "#d9d9d9");
    });
  });
  $("#aboutLink").click(() => {``
    let scrollAmount = $("#about").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 750);
  });
  $(".contactLink").click(() => {
    let scrollAmount = $("#contact").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 750);
  });
  $("#workLink").click(() => {
    let scrollAmount = $("#work").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 750);
  });
  $("#testimonialsLink").click(() => {
    let scrollAmount = $("#testimonials").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 750);
  });
  $(".workItemLeft").hover(function() {
    // $("body").css("background-color", "black");
    // console.log("here");
    // $(this).append(`<div class="textOverlay w3-animate-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora vitae molestiae, quis illum id.</div>`)
    // css("visibility", "visible");
    // $(this).css("display", "block");
  });
  let test1 = "testimonial 1";
  let test2 = "testimonial 2";
  let testArr = [test1, test2];
  let count = 0;
  setInterval(() => {
    // $.get("../text/test1.txt", (result) => {
    //   $("#testimonialText").html(result);
    // });
    $("#testimonialText").html(testArr[count]);
    count++;
    if (count >= testArr.length) {
      count = 0;
    }
  }, 10000);
});
function changeColors()
{
  let hexArray = ["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9","0"];
  let color;
  color = "#";
  for (var i = 0; i < 6; i++)
  {
      color+= hexArray[(Math.floor(Math.random()*16))];
  }
  return color;
}