(function ($) {
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

  $(document).ready(function () {
    // Check if the modal has already been shown
    if (!sessionStorage.getItem('modalShown')) {
      // Show the modal
      $('#exampleModal').modal('show');
      // Set session storage to prevent showing again
      sessionStorage.setItem('modalShown', 'true');
    }
  });

  // gallery js
  const items = document.querySelectorAll('.main .video_item');
  items.forEach((item, index) => {
    if ((index + 1) % 6 === 5) {
      item.classList.add('moved-up');
    }
  });


  // testimonial slider js
  $(".team_slider").slick({
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

  // Split text animation
  document.addEventListener("DOMContentLoaded", function () {
    if ($(".split-text").length > 0) {
      // Initialize SplitText animations
      initSplitTextAnimations();
  
      // Initialize Isotope
      const $projectsContainer = $('.projects_container').isotope({
        itemSelector: '.col-lg-6',
        layoutMode: 'fitRows'
      });
  
      // Filter projects when a button is clicked
      $('.projects_menus button').on('click', function () {
        const filterValue = $(this).attr('data-filter');
        $projectsContainer.isotope({ filter: filterValue });
  
        // Re-initialize the SplitText animations after Isotope filter, excluding the title
        $projectsContainer.one('arrangeComplete', function () {
          initSplitTextAnimations();
        });
      });
    }
  
    // Function to initialize SplitText animations
    function initSplitTextAnimations() {
      $(".split-text").each(function (index, el) {
        // If the element is the project section title and has already run, skip re-initialization
        if ($(el).hasClass('project-section-title') && el.hasRun) {
          return; // Skip this element
        }
  
        // Reset previous SplitText instance if it exists
        if (el.split) el.split.revert();
  
        // Create a new SplitText instance
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line"
        });
  
        gsap.set(el, {
          perspective: 400
        });
  
        // Apply initial animation settings based on the class
        const animationProps = {
          opacity: 0,
          ease: "circ.out"
        };
  
        if ($(el).hasClass('right')) {
          animationProps.x = "50";
        } else if ($(el).hasClass('left')) {
          animationProps.x = "-50";
        } else if ($(el).hasClass('up')) {
          animationProps.y = "80";
        } else if ($(el).hasClass('down')) {
          animationProps.y = "-80";
        }
  
        gsap.set(el.split.chars, animationProps);
  
        // Use ScrollTrigger for animation
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Mark the project section title as having run
              if ($(el).hasClass('project-section-title')) {
                el.hasRun = true; // Set a custom property to indicate it has run
              }
            }
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        });
      });
    }
  });
  
  // Image reveal js
  document.addEventListener('DOMContentLoaded', function () {
    let revealContainers = document.querySelectorAll(".reveal_image");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none reverse",
        }
      });

      tl.set(container, {
        autoAlpha: 1
      });

      if (container.classList.contains('zoom-out')) {
        // Zoom-out effect
        tl.from(image, 1.5, {
          scale: 1.4,
          ease: Power2.out
        });
      } else if (container.classList.contains('left') || container.classList.contains('right')) {
        let xPercent = container.classList.contains('left') ? -100 : 100;
        tl.from(container, 1.5, {
          xPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -xPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      }
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
  })

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
})(jQuery);