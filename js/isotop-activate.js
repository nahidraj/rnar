$(document).ready(function () {
  // init Isotope
  let $grid = $(".projects_container").isotope({
    // options
  });
  // filter items on button click
  $(".projects_menus").on("click", "button", function () {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  $(".projects_menus button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});

// $(document).ready(function () {
//   // init Isotope
//   let $grid = $(".latest_projects_container .row").isotope({
//       itemSelector: '.col-lg-6',
//       layoutMode: 'fitRows'
//   });

//   // filter items on button click
//   $(".projects_menus").on("click", "button", function () {
//       let filterValue = $(this).attr("data-filter");
//       $grid.isotope({ filter: filterValue });
//   });

//   // change active class on buttons
//   $(".projects_menus button").on("click", function (event) {
//       $(this).siblings(".active").removeClass("active");
//       $(this).addClass("active");
//       event.preventDefault();
//   });
// });