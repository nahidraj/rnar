$(function () {
  "use strict";

  // Fixed menu js start
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // gallery js
  const items = document.querySelectorAll('.main .video_item');

  items.forEach((item, index) => {
    if ((index + 1) % 6 === 5) {
      item.classList.add('moved-up');
    }
  });

  // rotate start gsap js
  gsap.from(".star img", {
    rotate: "360",
    scrollTrigger: {
      trigger: ".our_projects",
      scroller: "body",
      start: "top 50%",
      scrub: 0.5,
    },
  });

  // testimonial slider js
  $(".testimonial_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // Blog slider js
  $(".blog_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $('.blog_slider_prev').on('click', function () {
    $('.blog_slider').slick('slickPrev');
  });

  $('.blog_slider_next').on('click', function () {
    $('.blog_slider').slick('slickNext');
  });

  // // for sidebar menu timeline animation
  // const header_control_bar = document.querySelector(".header_control_bar");
  // const close_offcanvas = document.querySelector(".close_offcanvas");
  // const menu_overlay = document.querySelector(".menu_overlay");

  // let tl = gsap.timeline();
  // tl.to(".menu_overlay", {
  //   opacity:1,
  //   left:0,
  //   duration: 0.1,
  // });
  // tl.to(".menu_main_area", {
  //   left:0,
  //   opacity:1,
  //   duration: 0.3,
  // });
  // // tl.from(".info_item", {
  // //   opacity: 0,

  // // });

  // tl.pause();

  // header_control_bar.addEventListener("click", function () {
  //   tl.play();
  // });

  // close_offcanvas.addEventListener("click", function () {
  //   tl.reverse();
  // });
  // menu_overlay.addEventListener("click", function () {
  //   tl.reverse();
  // });

  // // section zoom js
  // TweenLite.defaultEase = Linear.easeNone;
  // var ctrl = new ScrollMagic.Controller();

  // // Create scenes
  // $(".content").each(function (i) {
  //   // let target1 = $(this).find(".section_title");
  //   let target2 = $(this).find(".service_left");
  //   let target3 = $(this).find(".service_right");
  //   let target4 = $(this).find(".expertise_item");
  //   var tl = new TimelineMax();
  //   // tl.from(target1, 1, {
  //   //   opacity: 0,
  //   //   y: -100
  //   // });
  //   // tl.from(target2, 1, {
  //   //   scale: 0.5
  //   // }, 0);
  //   tl.from(
  //     target2,
  //     1,
  //     {
  //       opacity: 0,
  //       x: -100,
  //     },
  //     0
  //   );
  //   tl.from(
  //     target3,
  //     1,
  //     {
  //       opacity: 0,
  //       x: 100,
  //     },
  //     0
  //   );
  //   tl.from(
  //     target4,
  //     1,
  //     {
  //       opacity: 0,
  //       x: -100,
  //       stagger: 1,
  //     },
  //     0
  //   );

  //   new ScrollMagic.Scene({
  //     triggerElement: this,
  //     duration: "50%",
  //     triggerHook: 0.5,
  //   })
  //     .setTween(tl)
  //     .addTo(ctrl);
  //   // .addIndicators({
  //   //   colorTrigger: "white",
  //   //   colorStart: "white",
  //   //   colorEnd: "white",
  //   //   indent: 40
  //   // });
  // });

  // gsap splitting text
  gsap.registerPlugin(ScrollTrigger);
  const splitTypes = document.querySelectorAll(".reveal-type");

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, {
      types: "chars,words",
    });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 100%",
        scrub: false,
        markers: false,
        toggleActions: "restart none none reset",
      },
      x: 80,
      opacity: 0,
      stagger: 0.02,
    });
  });



  // magnific popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // magnific video js
  $(".vidplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  /* Odometer Active js */
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // // image skew
  // let proxy = {
  //     skew: 0
  //   },
  //   skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  //   clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

  // ScrollTrigger.create({
  //   onUpdate: (self) => {
  //     let skew = clamp(self.getVelocity() / -300);
  //     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
  //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //       proxy.skew = skew;
  //       gsap.to(proxy, {
  //         skew: 0,
  //         duration: 0.8,
  //         ease: "power3",
  //         overwrite: true,
  //         onUpdate: () => skewSetter(proxy.skew)
  //       });
  //     }
  //   }
  // });

  // image reveal
  gsap.registerPlugin(ScrollTrigger);

  let revealContainers = document.querySelectorAll(".reveal_image");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });

    tl.set(container, {
      autoAlpha: 1,
    });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });


  // // project details image animation
  // gsap.utils.toArray(".content_image").forEach(function (container) {
  //   let image = container.querySelector("img");

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       scrub: true,
  //       pin: false,
  //     },
  //   });
  //   tl.from(image, {
  //     yPercent: -60,
  //     ease: Power2.out,
  //   }).to(image, {
  //     yPercent: 60,
  //     ease: Power2.out,
  //   });
  // });
  // // make the right edge "stick" to the scroll bar. force3D: true improves performance
  // gsap.set(".skewElem", {
  //   transformOrigin: "right center",
  //   force3D: true,
  // });

  // back to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // mobilel menu js

  $(".mobile-topbar .bars i").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});