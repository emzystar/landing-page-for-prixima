$(document).ready(function () {
  // hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    dots: false,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      760: {
        nav: true,
      },
    },
  });
  // project slider

  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    nav: true,
    navText: ["prev", "next"],
    dots: true,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      760: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
        dots: true,
      },
    },
  });

  $("#reviews-slider ").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
  });
});
