let example = ["Cute", "Awesome", "Beautiful", "Stanning", "Brave"];

textSequence(0);
function textSequence(i) {
  if (example.length > i) {
    setTimeout(function () {
      document.getElementById("preloader").innerHTML = example[i];
      textSequence(++i);
    }, 200);
  } else if (example.length == i) {
    textSequence(0);
  }
}
function preLoader() {
  setTimeout(() => {
    $("#preloaderBox").addClass("hide_preloder");
    $(".scale_box").css("transform", "scale(1)");
  }, 100);
}

$(document).ready(function () {

// pop up
$(".footer_button").click(()=>{
$(".pop_up").addClass("show");
})
$(".pop_up_button").click(()=>{
  $(".pop_up").removeClass("show");
  })


  // GSAP
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".locomotive-scroll"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".locomotive-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".locomotive-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({ scroller: ".locomotive-scroll" });

  // for header
  ScrollTrigger.create({
    start: "top -6%",
    trigger: ".locomotive-scroll",
    toggleClass: { targets: ".bg_title", className: "change_bg" },
  });

  ScrollTrigger.create({
    start: "top -6%",
    trigger: ".locomotive-scroll",
    toggleClass: { targets: ".bg_title", className: "change_bg" },
    toggleClass: { targets: ".heading", className: "opacity" },
  });

  // img to move up 
	gsap.to(".img_one_move_top", {
		y: "-100%",
		duration: 4,
		scrollTrigger: {
			trigger: "#animated-thumbnails",
			start: "top",
			end: "bottom 50%",
			scrub: 4,
			toggleActions: "restart none none none",
		}
	})

	gsap.to(".img_two_move_top", {
		y: "-80%",
		duration: 4,
		scrollTrigger: {
			trigger: ".trigger_img_two_row",
			start: "top 10%",
			end: "bottom 50%",
			scrub: 4,
			toggleActions: "restart none none none",
		}
	})

  	// gallery

	$('.gallery .gallery_sab_box .bg').each(function () {
		$(this).wrapAll('<a href="" data-fancybox="gallery"></a>');
	});

	$('.gallery .gallery_sab_box a').each(function () {
		var link = $(this).children('.bg').attr('src');
		console.log(link);
		link = link.replace(/(url\(|\)|")/g, '');
		$(this).attr('href', link);
	});

	$("[data-fancybox]").fancybox({
		loop: true,
		buttons: [
			"zoom",
			"share",
			"slideShow",
			"fullScreen",
			"download",
			"thumbs",
			"close"
		]
	})


});
