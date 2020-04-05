$(window).on("load", () => {
	resize();
	$(window).resize(() => {
		resize();
	});
	let replaceArr1 = document.getElementsByClassName("fotorama__caption");
	let replaceArr2 = document.getElementsByClassName("fotorama__caption__wrap");
	for (let i = 0; i < replaceArr2.length; i++) {
		replaceArr1[i].innerHTML = "<a class='fotorama__caption__wrap' target='_blank' href=" + replaceArr2[i].innerHTML + ">" + replaceArr2[i].innerHTML + "</a>";
	}
	$(".aboutLink").click(() => {
		let scrollAmount = $("#about").offset().top;
		$("html,body").animate({ scrollTop: scrollAmount }, 750);
	});
	$(".contactLink").click(() => {
		let scrollAmount = $("#contact").offset().top;
		$("html,body").animate({ scrollTop: scrollAmount }, 750);
	});
	$(".workLink").click(() => {
		let scrollAmount = $("#work").offset().top;
		$("html,body").animate({ scrollTop: scrollAmount }, 750);
	});
	$(".testimonialsLink").click(() => {
		let scrollAmount = $("#testimonials").offset().top;
		$("html,body").animate({ scrollTop: scrollAmount }, 750);
	});
	$(".workItem:nth-child(1)").hover(function () {
		// $("body").css("background-color", "black");
		// console.log("here");
		// $(this).append(`<div class="textOverlay w3-animate-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora vitae molestiae, quis illum id.</div>`)
		// css("visibility", "visible");
		// $(this).css("display", "block");
	});
});
function changeColors() {
	let hexArray = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	let color;
	color = "#";
	for (var i = 0; i < 6; i++) {
		color += hexArray[Math.floor(Math.random() * 16)];
	}
	return color;
}
function resize() {
	let height1 = $(window).height();
	let height2 = $("#header").outerHeight();
	let height3 = height1 - height2;

	$("#showcase").css("height", height3 + "px");
}
